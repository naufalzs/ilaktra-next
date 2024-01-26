import React from "react";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Checkbox, TextInput } from "@/components";

export default function LoginPage() {
  const inputStyle = {
    className: "flex-col flex space-y-4",
    classNameContainer: "shadow-sm rounded-full overflow-hidden",
    classNameInput: "rounded-l-md",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <p className="text-center font-lato text-black font-bold text-[29px] leading-[42px]">
            Log in
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">to continue</p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md space-y-5">
            <TextInput
              htmlFor="email-address"
              label="Enter your email address"
              type="email"
              name="email"
              id="email-address"
              autoComplete="email"
              placeholder="Enter your email address"
              required
              icon={faEnvelope}
              className={inputStyle.className}
              classNameContainer={inputStyle.classNameContainer}
              classNameInput={inputStyle.classNameInput}
            />
            <TextInput
              htmlFor="password"
              label="Enter your password"
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              icon={faEye}
              className={inputStyle.className}
              classNameContainer={inputStyle.classNameContainer}
              classNameInput={inputStyle.classNameInput}
            />
          </div>

          <div className="flex items-center justify-between">
            <Checkbox
              htmlFor="remember-me"
              label="Remember me"
              name="remember-me"
              id="remember-me"
            />

            <div className="text-sm">
              <a href="#" className="font-medium ">
                {" "}
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Link
              href="/seller-dashboard"
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-primary hover:bg-green-700 focus:outline-none"
            >
              Sign in
            </Link>
          </div>
        </form>
        <div className="text-sm text-center">
          Don&#39;t have an account?{" "}
          <Link
            href={"/signup"}
            className="font-medium text-primary hover:text-green-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
