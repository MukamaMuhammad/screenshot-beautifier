import React from "react";
import logo2 from "@public/images/logo2.jpg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      class="container
    mx-auto"
    >
      <div class=" md:py-12  flex items-center justify-between sm:flex-row flex-col">
        <div>
          <a class="flex title-font font-medium items-center md:justify-start justify-center ">
            <Image
              class=" rounded h-7 w-8 max-md:hidden"
              alt="logo"
              src={logo2}
            />
            <span class="md:ml-3 text-xl">Shotune</span>
          </a>
          <p class="text-sm text-gray-500 sm:mt-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2  mt-4">
            © 2024 Shotune —
            <a
              href="https://twitter.com/LolentiMuhammad"
              class=" ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @lolenti
            </a>
          </p>
        </div>

        <div className="md:ml-3 flex flex-col justify-center  text-gray-500 text-sm max-md:mt-4 max-md:text-center">
          <div className="text-gray-300 mb-2">LINKS</div>
          <ul className="flex flex-col gap-2 ">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tools">Tools</Link>
            </li>
          </ul>
        </div>

        <div className="md:ml-3 flex flex-col justify-center  text-gray-500 text-sm max-md:mt-4 max-md:text-center">
          <div className="text-gray-300 mb-2">LEGAL</div>
          <ul className="flex flex-col gap-2 ">
            <li>
              <Link href="/terms">Terms of use</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link href="/cookie-policy">Cookie policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
