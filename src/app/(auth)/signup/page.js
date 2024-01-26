import React from "react";
import {
  faEnvelope,
  faIndustry,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { Captcha, Checkbox } from "@/components";

const TextInput = ({
  htmlFor,
  label,
  type,
  name,
  id,
  autoComplete,
  placeholder,
  required,
  icon,
}) => (
  <div>
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <div className="w-full shadow-md border sm:text-sm border-gray-100 bg-white rounded-md flex items-center justify-center">
      <input
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className="mt-1 bg-white border-none focus:outline-none hover:border-none active:border-none flex-1 py-3 pl-4"
      />
      <FontAwesomeIcon icon={icon} height={14} className="pr-4" />
    </div>
  </div>
);

export default function SignupPage() {
  const imgUrl =
    "https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2V8ZW58MXx8fHwxNjk5MzAxNDk4fDA&ixlib=rb-4.0.3&q=80&w=1080";
  return (
    <>
      <div className="min-h-screen w-full flex overflow-hidden">
        <div className="relative w-0 md:w-[936px] bg-cover">
          <Image
            src={imgUrl}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-full h-full"
          />
        </div>

        <div className="h-full flex-1 w-full md:px-0 sm:px-6 px-5 flex flex-col justify-center py-12  ">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className=" md:px-9 px-2">
              <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10">
                <p className="font-lato text-black text-[29px] leading-[42px]">
                  Sign up
                </p>
                <p className="mt-2  text-sm text-gray-600">
                  Enter your details to continue
                </p>
              </div>

              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Signing up as:
                  </label>
                  <div className="mt-1 flex justify-between">
                    <button
                      type="button"
                      className="w-[10rem] inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-primary hover:bg-green-700 focus:outline-none"
                    >
                      Buyer
                    </button>
                    <button
                      type="button"
                      className="w-[10rem] inline-flex justify-center py-2 px-4 border border-[#46a587] shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                    >
                      Seller
                    </button>
                  </div>
                </div>

                {/* Input List */}
                <TextInput
                  htmlFor="full-name"
                  label="Full name"
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                  icon={faUser}
                />

                <TextInput
                  htmlFor="email"
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  required
                  icon={faEnvelope}
                />

                <TextInput
                  htmlFor="phone"
                  label="Phone"
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  required
                  icon={faPhone}
                />

                <TextInput
                  htmlFor="industry"
                  label="Industry"
                  type="text"
                  name="industry"
                  id="industry"
                  placeholder="Enter your industry"
                  required
                  icon={faIndustry}
                />

                <TextInput
                  htmlFor="password"
                  label="Create your password"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  placeholder="Enter your password"
                  required
                  icon={faLock}
                />

                <TextInput
                  htmlFor="confirm-password"
                  label="Confirm Password"
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  required
                  icon={faLock}
                />

                <Captcha />

                <Checkbox
                  htmlFor="term"
                  label="I agree with the Terms and Privacy."
                  name="term"
                  id="term"
                />

                <div className="w-full mx-auto">
                  <Link
                    href="/buyer-dashboard"
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded text-black bg-[#46a587] hover:bg-green-700 focus:outline-none"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
