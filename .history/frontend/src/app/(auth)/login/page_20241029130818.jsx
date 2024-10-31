"use client";
import LoginButton from "../../../components/auth/LoginButton";
import { socialMedia } from "../../../constants";
import google from "/public/icons/index";
export default () => {
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};
  console.log(socialMedia);
  return (
    <div>
      <LoginButton
        imgURL={google}
        alt="mail Logo"
        onClick={handleMailLogin}
        text="Login with Google"
      />
    </div>
  );
};
