import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { H1 } from "@/components/Heading";

const TextInput = ({ htmlFor, label, type, name, id, placeholder, icon }) => (
  <div className="mb-4 md:mb-0">
    <label
      htmlFor={htmlFor}
      className="block text-bold font-medium text-gray-700"
    >
      {label}
    </label>
    <div className="mt-3 relative rounded-md shadow-lg flex items-center justify-center">
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
}) => (
  <div className="mb-4 md:mb-0">
    <label
      htmlFor={htmlFor}
      className="block text-bold font-medium text-gray-700"
    >
      {label}
    </label>
    <div className="mt-3 relative rounded-md shadow-lg flex items-center justify-center">
      <select
        name={name}
        id={id}
        className="form-select bg-white block w-full sm:text-sm sm:leading-5 rounded-xl p-4"
      >
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  </div>
);

export default function RFQLoginPage() {
  return (
    <div>
      <div className="md:px-20 mt-10 flex items-center space-x-5">
        <FontAwesomeIcon icon={faArrowLeft} height={16} />
        <p>Back</p>
      </div>
      <div className="container mx-auto py-10 lg:w-[732px] md:px-0 px-6">
        <div className="flex flex-col space-y-5 mb-5">
          <H1>Post RFQ</H1>
          <p>
            Signed in as{" "}
            <a href="#" className="underline">
              abcd@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-y-6">
          <div className="col-span-2">
            <div className="mt-3 flex items-center justify-center rounded-md shadow-lg space-x-3">
              <FontAwesomeIcon icon={faSearch} height={16} className="ml-3" />
              <select
                id="product"
                name="product"
                className="form-select bg-white block w-full sm:text-sm sm:leading-5 rounded-xl py-4"
              >
                <option>Select Product</option>
              </select>
            </div>
          </div>

          <TextInput
            htmlFor="moq"
            label="MOQ (Minimum Order Quantity)"
            type="number"
            name="moq"
            id="moq"
            placeholder="Enter your quantity"
            icon={faCartShopping}
          />

          <SelectInput
            htmlFor="destination-country"
            label="Destination Country"
            name="destination-country"
            id="destination-country"
            options={[{ value: 1, label: "Select Country" }]}
          />

          {/* Message field */}
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-bold font-medium text-gray-700"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows="6"
                className="shadow-lg p-4 focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Please provide details about the product you are looking for..."
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 rounded-lg py-2 shadow">
            <div className="flex items-center">
              <input
                id="recaptcha"
                name="recaptcha"
                type="checkbox"
                required
                className="h-4 w-4 bg-primary focus:ring-green-500 border-gray-300 rounded"
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

          <div className="col-span-2 flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree with the Terms and Privacy
            </label>
          </div>

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
}
