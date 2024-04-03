import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import AuthContainer from '../Elements/AuthContainer';
import AuthInput from '../Elements/AuthInput';
import Button from '../Elements/Button';
import Link from 'next/link';
import Image from 'next/image'
import logo from "../../assets/logo-full.svg";
const Register = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      console.log("Verification email sent to", user.email);

      // Store additional user data in Firestore
      const db = getFirestore();
      await setDoc(doc(db, 'users', user.uid), {
        email: email,
        phoneNumber: phoneNumber,
      });

      // Redirect to home page or dashboard
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthContainer>
      <div className="register-container">
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
        <p className="text-4xl font-medium mb-4">Register</p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleRegister}>
          <div>
            <AuthInput
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full my-4"
              icon={<Image src="/loginIcon.svg" height={16} width={16} alt='icon'/>}
            />
          </div>
          <div>
            <AuthInput
              type="tel"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full my-4"
            
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
              icon={<Image src="/donloadIcon.svg" height={16} width={16} alt='icon'/>}
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-6 mb-3 bg-main text-white"
          >
            Register
          </Button>
        </form>
        <Link href="/login">
          <Button
            className="w-full my-2 text-main font-semibold"
          >
            Login
          </Button>
        </Link>
      </div>
    </AuthContainer>
  );
};

export default Register;
