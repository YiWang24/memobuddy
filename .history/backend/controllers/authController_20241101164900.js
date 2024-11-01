const User = require("../models/User");
const crypto = require("crypto");
const sendGmail = require("../utils/sendGmail");
const GoogleAuthService = require("../utils/googleAuthService");
const Token = require("../models/token");
const googleAuthService = new GoogleAuthService();

function generateEmailTemplate(code) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #4285f4;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
          }
          .code {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            font-size: 24px;
            color: #fff;
            background-color: #4285f4;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Password Reset Code</h1>
          <p>Dear user,</p>
          <p>We received a request to reset your password. Please use the following code to reset your password:</p>
          <div class="code">${code}</div>
          <p>If you did not request a password reset, please ignore this email.</p>
          <p>Thank you,<br>The Team</p>
        </div>
      </body>
    </html>
  `;
}

async function checkUserExists(email, shouldExist = true) {
  const user = await User.findOne({ email });
  if (shouldExist && !user) {
    throw new Error("User Not Found");
  } else if (!shouldExist && user) {
    throw new Error("User Already Exists");
  }
  return user;
}

const authController = {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("All fields are required");
      }
      await checkUserExists(email, false);

      //use local strategy to register user
      const newUser = new User({ email });
      await User.register(newUser, password);
      res.status(201).json({
        message: "User registered successfully",
        user: { id: newUser._id, email: newUser.email },
      });
      console.log("User registered successfully: ", newUser.email);
    } catch (error) {
      next(error);
    }
  },
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("All fields are required");
      }
      const user = await checkUserExists(email);

      //use local strategy to authenticate user
      user.authenticate(password, (err, authenticatedUser) => {
        if (err || !authenticatedUser) {
          return next(new Error("Unauthorized"));
        }

        req.login(authenticatedUser, (err) => {
          if (err) {
            return next(new Error(loginErr.message));
          }
          res.status(200).json({
            message: "User logged in successfully",
            user: { id: authenticatedUser._id, email: authenticatedUser.email },
          });
          console.log("User logged in successfully: ", user.email);
        });
      });
    } catch (error) {
      next(error);
    }
  },
  logout(req, res, next) {
    const user = req.user;
    try {
      req.logout((err) => {
        // Use async callback
        if (err) {
          return next(err);
        }
        // Send success response after logout and session destruction
        res.status(200).json({ message: "User logged out successfully" });
        console.log("User logged out successfully: ", user.email);
      });
    } catch (error) {
      next(error);
    }
  },

  googleAuthCallback(req, res) {
    const user = { googleId: req.user.googleId, email: req.user.email };
    req.session.user = user;
    console.log("User logged in successfully: ", user.email);
    res.redirect(
      `http://localhost:3000/diary?state=success&email=${user.email}&googleId=${user.googleId}`
    );
  },

  async checkCurrentUser(req, res, next) {
    try {
      const { googleId, email } = req.body;
      if (
        req.session.user &&
        req.session.user.googleId === googleId &&
        req.session.user.email === email
      ) {
        console.log(
          "checkCurrentUser:" +
            req.session.user.googleId +
            " ------- " +
            req.session.user.email
        );
        console.log(req.body);
        res.status(200).json({
          message: "User is logged in by google",
          user: { id: req.session.googleId, email: req.session.user.email },
        });
        console.log("User is logged in by google: ", email, googleId);
      } else {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      next(error);
    }
  },

  async requestResetCode(req, res, next) {
    try {
      const user = await checkUserExists(req.body.email);
      const resetCode = crypto.randomInt(100000, 999999).toString();
      user.resetCode = resetCode;
      user.resetCodeExpiration = Date.now() + 3600000;
      await user.save();

      await sendGmail({
        to: req.body.email,
        subject: "Your Password Reset Code",
        html: generateEmailTemplate(code),
      });

      res.status(200).json({ message: "Reset code sent to your email" });
      console.log("Reset code sent to ", req.body.email, ":", resetCode);
    } catch (error) {
      next(error);
    }
  },

  async verifyResetCode(req, res, next) {
    const { email, resetCode } = req.body;
    try {
      const user = await checkUserExists(email);

      if (
        user.resetCode !== resetCode ||
        user.resetCodeExpiration < Date.now()
      ) {
        throw new Error("Unauthorized");
      }

      res.status(200).json({ message: "Reset code verified" });
    } catch (error) {
      next(error);
    }
  },

  async resetPassword(req, res, next) {
    const { email, resetCode, password } = req.body;
    try {
      const user = await checkUserExists(email);

      if (
        user.resetCode !== resetCode ||
        user.resetCodeExpiration < Date.now()
      ) {
        throw new Error("Invalid or expired reset code");
      }

      await user.setPassword(password);
      user.resetCode = null;
      user.resetCodeExpiration = null;
      await user.save();
      res.status(200).json({ message: "Password reset successful" });
      console.log(user);
    } catch (error) {
      next(error);
    }
  },

  async startAuth(req, res) {
    try {
      const authUrl = googleAuthService.getAuthUrl();
      res.json({ authUrl });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  },

  async handleCallback(req, res) {
    try {
      const { code } = req.query;

      if (!code) {
        return res.status(400).json({ error: "Missing code parameter" });
      }

      const tokens = await googleAuthService.handleCallback(code);

      const tokenDoc = await Token.create({
        refreshToken: tokens.refresh_token,
        accessToken: tokens.access_token,
      });

      const redirectUrl = new URL("http://localhost:8888");
      redirectUrl.searchParams.append("message", "OAuth successful");
      redirectUrl.searchParams.append("tokenId", tokenDoc._id);
      redirectUrl.searchParams.append("createdAt", tokenDoc.createdAt);

      res.redirect(redirectUrl.toString());
      // res.json({
      //   message: "OAuth successful",
      //   tokenId: tokenDoc._id,
      //   createdAt: tokenDoc.createdAt,
      // });
    } catch (error) {
      console.error("Oauth failed:", error);
      res.status(500).json({
        error: "Oauth failed",
        details: error.message,
      });
    }
  },

  async getTokenInfo(req, res) {
    try {
      const latestToken = await Token.findOne()
        .sort({ createdAt: -1 })
        .select("-refreshToken -accessToken"); // Exclude sensitive fields

      if (!latestToken) {
        return res.status(404).json({ error: "No token found" });
      }

      res.json({
        tokenId: latestToken._id,
        createdAt: latestToken.createdAt,
      });
    } catch (error) {
      res.status(500).json({ error: "No token found" });
    }
  },
};

module.exports = authController;
