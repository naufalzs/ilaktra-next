import React from "react";

const Captcha = () => {
  return (
    <div className="flex items-center justify-between px-4 rounded-lg py-2 shadow md:my-0 my-6 border border-gray-100">
      <div className="flex items-center">
        <input
          id="recaptcha"
          name="recaptcha"
          type="checkbox"
          required
          className="h-4 w-4 bg-primary focus:ring-green-500 border-gray-300 rounded"
        />
        <label htmlFor="recaptcha" className="ml-2 block text-sm text-gray-900">
          I&#39;m not a robot
        </label>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/2048px-RecaptchaLogo.svg.png"
        alt=""
        className="w-16"
      />
    </div>
  );
};

export default Captcha;
