"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== cpassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    async function isEmailAlreadyRegistered(email) {
      const { data, error } = await supabase
        .from("profile")
        .select("id")
        .eq("email", email);
      if (error) {
        throw error;
      }
      return data.length > 0;
    }

    try {
      // Check if the user already exists

      if (await isEmailAlreadyRegistered(email)) {
        // User already exists, handle accordingly (show error message, redirect, etc.)
        setRegistrationError("User with this email already exists");
        return;
      }
      // Register a new user
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        console.error("Error signing up:", error.message);
        setRegistrationError(`Error signing up: ${error.message}`);
      } else {
        console.log("User registered successfully:", user);
        router.push("/auth/welcome");
        // Redirect or perform other actions after successful registration
      }
    } catch (error) {
      console.error("Error:", error.message);
      setRegistrationError(`Error: ${error.message}`);
    }
  };

  return (
    <div className="h-[100vh] container px-5  mx-auto flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Welcome to Shotune!</CardTitle>
          <CardDescription className="text-center">
            Sign up to Shotune and start designing for free. No credit card
            required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  id="cpassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleCPasswordChange}
                />
              </div>
            </div>
            <div className="mt-2">
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
              {registrationError && (
                <p className="text-red-500 text-sm">{registrationError}</p>
              )}
            </div>
            <Button className="w-[100%] mt-3">Sign Up</Button>
          </form>
        </CardContent>
        <CardFooter className="w-[100%] flex flex-col gap-2 mt-[-8px]">
          <p className="text-[12px]">OR</p>
          <Button
            className="w-[100%]"
            onClick={() =>
              supabase.auth.signInWithOAuth({
                provider: "google",
              })
            }
          >
            <span className="mr-2">
              <FaGoogle />
            </span>
            Sign in With Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;

const apiUrl = "https://api.lemonsqueezy.com/v1/products/152076";

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Response:", data.data.attributes.store_id);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

fetchData();
