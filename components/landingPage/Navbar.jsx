"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@components/ui/button";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="inset-0 bg-transparent ">
      <nav class="w-full z-50 top-0 start-0 border-b-[1px] border-gray-200 bg-foreground/10 border-opacity-10">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Shotune
            </span>
          </Link>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn ? (
              <Button onClick={handleSignOut}>Log Out</Button>
            ) : (
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  className="max-md:hidden"
                  onClick={() => router.push("/auth/signin")}
                >
                  Sign In
                </Button>
                <Button onClick={() => router.push("/auth/signup")}>
                  Sign Up
                </Button>
              </div>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3  rounded    md:p-0    ">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3  rounded    md:p-0    ">
                  Faqs
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3  rounded    md:p-0    ">
                  Contact
                </a>
              </li>
              {isLoggedIn && (
                <li>
                  <a href="#" class="block py-2 px-3  rounded    md:p-0    ">
                    Subscriptions
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
