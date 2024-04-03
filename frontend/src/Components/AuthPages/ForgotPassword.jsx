import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import FirebaseData from "@/utils/Firebase";
import AuthContainer from "../Elements/AuthContainer";
import Link from "next/link";
import Button from "../Elements/Button";
import AuthInput from "../Elements/AuthInput";
import Image from "next/image";
import logo from "../../assets/logo-full.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { authentication } = FirebaseData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = e.target.email.value;

    try {
      await sendPasswordResetEmail(authentication, email);
      setSuccess("Password reset email sent. Please check your inbox.");
      toast.success("Password reset email sent successfully!");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      let errorMessage = "An error occurred. Please try again.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No user found with this email address.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address. Please enter a valid email.";
      }
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };
  return (
    <AuthContainer>
      <div className="forgot-password-container">
        <div className="flex justify-center w-full md:hidden">
          {" "}
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
            className="mt-12 mb-10 "
          />
        </div>
        <p className="text-4xl font-medium mb-4">Forgot Password</p>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <AuthInput
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full my-4"
              icon={
                <Image src="/loginIcon.svg" height={16} width={16} alt="icon" />
              }
            />
          </div>
          <Button type="submit" className="w-full mt-6 mb-3 bg-main text-white">
            Reset Password
          </Button>
        </form>
        <Link href="/login">
          <Button className="w-full my-2 text-main font-semibold">
            Back to Login
          </Button>
        </Link>
      </div>
    </AuthContainer>
  );
};

export default ForgotPassword;
