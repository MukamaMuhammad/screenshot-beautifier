"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // sign in a user
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("Error signing in:", error.message);
        setSignInError(`Error signing in: ${error.message}`);
      } else {
        console.log("User signed in successfully:");
        router.push("/landing");
        // Redirect or perform other actions after successful registration
      }
    } catch (error) {
      console.log(error);
      console.error("Error:", error.message);
      setSignInError(`Error: ${error.message}`);
    }
  };

  return (
    <div className="h-[100vh] container px-5  mx-auto flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Welcome back!</CardTitle>
          <CardDescription className="text-center">
            Log in into your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn}>
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
            </div>
            <div className="mt-2">
              {signInError && (
                <p className="text-red-500 text-sm">{signInError}</p>
              )}
            </div>
            <Button className="w-[100%] mt-3">Sign In</Button>
          </form>
        </CardContent>
        <CardFooter className="w-[100%] flex flex-col gap-3 mt-[-8px]">
          <p className="text-[12px]">OR</p>
          <Button className="w-[100%]">
            <span className="mr-2">
              <FaGoogle />
            </span>
            Sign In With Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
