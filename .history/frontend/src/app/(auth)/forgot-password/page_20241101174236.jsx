"use client";
import React, { useState, useEffect } from "react";
import { AuthResetPasswordCard } from "@/components/auth";
import { authApi } from "@/api";
import { message } from "antd";

export default function page() {
  const [stage, setStage] = useState("email");
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const handleValidInput = (id, value) => {
    setFormData((prev) => {
      if (value === null) {
        return { ...prev, [id]: "" };
      } else {
        return { ...prev, [id]: value };
      }
    });
  };

  const validateFormData = () => {
    if (stage === "email" && !formData.email) {
      message.error("Please fill in a valid email address");
      return false;
    }
    if (stage === "code" && !formData.code) {
      message.error("Please fill in the correct code");
      return false;
    }
    if (stage === "password") {
      if (!formData.password || !formData.confirmPassword) {
        message.error("Please fill in the password fields");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        message.error("Passwords do not match");
        return false;
      }
    }
    return true;
  };

  const handleEmailSubmit = async () => {
    try {
      await authApi.requestPasswordReset(formData.email);
      
      message.success("Password reset email sent");
    } catch (error) {
      message.error("Error sending reset email");
    }
  };

  const handleCodeSubmit = async () => {
    try {
      const response = await authApi.verifyPasswordReset({
        resetCode: formData.code,
        email: formData.email,
      });
      if (response.status === 200) {
        message.success("Code verified successfully");
        setStage("password");
      } else {
        message.error("Code verification failed");
      }
    } catch (error) {
      message.error("Code verification error");
    }
  };

  const handlePasswordSubmit = async () => {
    try {
      const response = await authApi.resetPassword({
        email: formData.email,
        resetCode: formData.code,
        password: formData.password,
      });
      if (response.status === 200) {
        message.success("Password reset successful");
        setStage("success");
      } else {
        message.error("Password reset failed");
      }
    } catch (error) {
      message.error("Error resetting password");
    }
  };

  const handleSubmit = async () => {
    if (!validateFormData()) return;

    switch (stage) {
      case "email":
        await handleEmailSubmit();
        break;
      case "code":
        await handleCodeSubmit();
        break;
      case "password":
        await handlePasswordSubmit();
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthResetPasswordCard
        stage={stage}
        email={formData.email}
        onInputChange={handleValidInput}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
