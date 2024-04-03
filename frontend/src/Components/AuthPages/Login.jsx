import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { toast } from "react-toastify"; //
import FirebaseData from "@/utils/Firebase";
import { signupLoaded } from "@/store/reducer/authSlice";
import { Fcmtoken } from "@/store/reducer/settingsSlice";
import Swal from "sweetalert2";
import AuthContainer from "../Elements/AuthContainer";
import AuthInput from "../Elements/AuthInput";
import Button from "../Elements/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo-full.svg";
const Login = () => {
  const navigate = useRouter();
  const FcmToken = useSelector(Fcmtoken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { authentication } = FirebaseData();

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    let user;

    try {
      try {
        const userCredential = await signInWithEmailAndPassword(
          authentication,
          email,
          password,
        );
        user = userCredential.user;
        if (!userCredential.user.emailVerified) {
          return setError(
            <>
              Please verify your email before logging in. Click{" "}
              <a
                href="#resend"
                onClick={() => {
                  sendEmailVerification(authentication.currentUser)
                    .then(() => {
                      toast.info(
                        "Verification email sent. Please check your inbox.",
                      );
                    })
                    .catch((error) => {
                      console.error("Error sending verification email:", error);
                      toast.error(
                        "Failed to send verification email. Please try again later.",
                      );
                    });
                }}
              >
                here
              </a>{" "}
              to resend verification email
            </>,
          );
        }
        toast.success("Login successful!");
      } catch (error) {
        console.error("Error during Firebase login:", error);
        let errorMessage = "An error occurred during login. Please try again.";
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          errorMessage = "Invalid email or password. Please try again.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address. Please enter a valid email.";
        }
        setError(errorMessage);
        throw error; // Re-throw the error to be caught by the outer try-catch
      }
      signupLoaded(
        user?.displayName,
        user?.email,
        "",
        "0",
        "",
        user?.uid,
        "",
        user?.photoURL,
        FcmToken,
        (res) => {
          let signupData = res.data;
          console.log(signupData);
          if (!res.error) {
            if (signupData.mobile === "") {
              navigate.push("/user-register");
            } else {
              navigate.push("/");
            }
          }
        },
        (err) => {
          if (
            err ===
            "Account Deactivated by Administrative please connect to them"
          ) {
            Swal.fire({
              title: "Opps!",
              text: "Account Deactivated by Administrative please connect to them",
              icon: "warning",
              showCancelButton: false,
              customClass: {
                confirmButton: "Swal-confirm-buttons",
                cancelButton: "Swal-cancel-buttons",
              },
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate.push("/contact-us");
              }
            });
          }
        },
      );
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <AuthContainer>
      <div className="login-container">
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
        <p className="text-4xl font-medium mb-4">Login</p>
        {error && <p className="error">{error}</p>}
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
          <div>
            <AuthInput
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full my-4"
              icon={
                <Image
                  src="/donloadIcon.svg"
                  height={16}
                  width={16}
                  alt="icon"
                />
              }
            />
          </div>
          <div className="flex justify-end mb-2">
            <Link href="/forgot" className="text-main font-semibold">
              Forgot Password?
            </Link>
          </div>
          <Button type="submit" className="w-full mt-6 mb-3 bg-main text-white">
            Login
          </Button>
        </form>
        <Link href="/register">
          <Button className="w-full my-2 text-main font-semibold">
            Register
          </Button>
        </Link>
      </div>
    </AuthContainer>
  );
};

export default Login;
