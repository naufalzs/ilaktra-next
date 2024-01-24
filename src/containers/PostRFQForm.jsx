import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCartShopping,
  faEnvelope,
  faIndustry,
  faLock,
  faPhone,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { H1 } from "@/components/Heading";

const TextInput = ({
  htmlFor,
  label,
  type,
  name,
  id,
  placeholder,
  icon,
  isDashboard,
}) => (
  <div className="mb-4 md:mb-0">
    <label
      htmlFor={htmlFor}
      className={cx("block text-bold font-medium", {
        "text-xs text-[#080a0b] leading-4": isDashboard,
        "text-gray-700": !isDashboard,
      })}
    >
      {label}
    </label>
    <div className="mt-3 relative rounded-md shadow-lg flex items-center justify-center border border-gray-100">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="p-4 rounded-xl form-input block w-full sm:text-sm sm:leading-5"
      />
      {type === "number" ? (
        <FontAwesomeIcon icon={icon} height={16} className="mr-3" />
      ) : (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={icon} height={16} />
        </div>
      )}
    </div>
  </div>
);

const SelectInput = ({
  htmlFor,
  label,
  name,
  id,
  options = [{ value: 1, label: "testOption" }],
  isDashboard,
}) => (
  <div className="mb-4 md:mb-0">
    <label
      htmlFor={htmlFor}
      className={cx("block text-bold font-medium", {
        "text-xs text-[#080a0b] leading-4": isDashboard,
        "text-gray-700": !isDashboard,
      })}
    >
      {label}
    </label>
    <div className="mt-3 relative rounded-md shadow-lg flex items-center justify-center">
      <select
        name={name}
        id={id}
        className={cx(
          "form-select bg-white block w-full sm:text-sm sm:leading-5 rounded-xl p-4",
          { "text-[#a8a8aa]": isDashboard }
        )}
      >
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  </div>
);

const PostRFQForm = ({ isDashboard, isLogin }) => {
  return (
    <div className={cx({ "p-5": isDashboard })}>
      {!isDashboard && (
        <Link href="/" className="md:px-20 mt-10 flex items-center space-x-5">
          <FontAwesomeIcon icon={faArrowLeft} height={16} />
          <p>Back</p>
        </Link>
      )}
      <div
        className={cx("py-10 lg:w-[732px]", {
          "container mx-auto px-6 md:px-0": !isDashboard,
        })}
      >
        <div className="flex flex-col space-y-5 mb-5">
          <H1
            className={
              isDashboard
                ? "font-montserrat text-[#080a0b] font-bold text-5xl leading-[56px]"
                : ""
            }
          >
            Post RFQ
          </H1>
          {isLogin || isDashboard ? (
            <p
              className={
                isDashboard
                  ? "font-montserrat text-[#5d5d5b] text-sm leading-[18px]"
                  : ""
              }
            >
              Signed in as{" "}
              <a href="#" className="underline">
                abcd@gmail.com
              </a>
            </p>
          ) : (
            <p>
              If you already have an account then{" "}
              <Link href={"/login"} className="text-green-500">
                Click Here
              </Link>{" "}
              <br />
              to Sign in.
            </p>
          )}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6">
          {!isLogin && !isDashboard && (
            <>
              <TextInput
                htmlFor="full-name"
                label="Full name"
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Enter your full name"
                icon={faUser}
              />

              <TextInput
                htmlFor="email"
                label="Email"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                icon={faEnvelope}
              />

              <TextInput
                htmlFor="phone"
                label="Phone"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                icon={faPhone}
              />

              <TextInput
                htmlFor="industry"
                label="Industry"
                type="text"
                name="industry"
                id="industry"
                placeholder="Enter your industry"
                icon={faCartShopping}
              />

              <TextInput
                htmlFor="password"
                label="Create your password"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                icon={faLock}
              />

              <TextInput
                htmlFor="confirm-password"
                label="Confirm password"
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Re-enter your password"
                icon={faLock}
              />
            </>
          )}

          {/* in dashboard search product is input with text type, not select */}
          {isDashboard ? (
            <div className="col-span-2">
              <div className="mt-3 flex items-center justify-center rounded-md shadow-lg space-x-3 border border-gray-100">
                <FontAwesomeIcon icon={faSearch} className="ml-3" />
                <input
                  type="text"
                  className="form-select bg-white block w-full sm:text-sm sm:leading-5 rounded-xl py-4 outline-none"
                  placeholder="Search Product"
                />
              </div>
            </div>
          ) : (
            <div className="col-span-2">
              <div className="mt-3 flex items-center justify-center rounded-md shadow-lg space-x-3 border border-gray-100 text-[#a8a8aa] text-sm">
                <FontAwesomeIcon
                  color="#a8a8aa"
                  icon={faSearch}
                  height={16}
                  className="ml-3"
                />
                <select
                  id="product"
                  name="product"
                  className="form-select bg-white block w-full sm:text-sm sm:leading-5 rounded-xl py-4"
                >
                  <option>Select Product</option>
                </select>
              </div>
            </div>
          )}

          <TextInput
            htmlFor="moq"
            label="MOQ (Minimum Order Quantity)"
            type="number"
            name="moq"
            id="moq"
            placeholder="Enter your quantity"
            icon={faIndustry}
            isDashboard={isDashboard}
          />

          <SelectInput
            htmlFor="destination-country"
            label="Destination Country"
            name="destination-country"
            id="destination-country"
            options={[{ value: 1, label: "Select Country" }]}
            isDashboard={isDashboard}
          />

          {/* Message field */}
          <div className="col-span-2">
            <label
              htmlFor="message"
              className={cx("block text-bold font-medium text-gray-700", {
                "text-xs text-[#080a0b] leading-4": isDashboard,
              })}
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows="6"
                className="shadow-lg p-4 focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-100 rounded-md"
                placeholder="Please provide details about the product you are looking for..."
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 rounded-lg py-2 shadow md:my-0 my-6 border border-gray-100">
            <div className="flex items-center">
              <input
                id="recaptcha"
                name="recaptcha"
                type="checkbox"
                required
                className="h-4 w-4 bg-primary focus:ring-green-500 rounded"
              />
              <label
                htmlFor="recaptcha"
                className="ml-2 block text-sm text-gray-900"
              >
                I&#39;m not a robot
              </label>
            </div>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/2048px-RecaptchaLogo.svg.png"
              alt=""
              className="w-16"
            />
          </div>

          <div className="col-span-2 flex items-center md:my-0 my-4 mb-6">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-gray-900 "
            >
              I agree with the Terms and Privacy
            </label>
          </div>

          {/* Submit button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-[20rem] flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-black  bg-primary hover:bg-green-700 focus:outline-none"
            >
              Post RFQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRFQForm;
