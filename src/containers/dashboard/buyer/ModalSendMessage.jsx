import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CustomInput } from "@/components";

const ModalSendMessage = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border  shadow-lg rounded-2xl bg-[#f6f6f6] md:w-[547px] md:h-[511px]">
        <div className="mt-3">
          <div className="flex justify-between">
            <p className="font-montserrat text-2xl text-[#030303] leading-[31px]">
              Send a Message
            </p>
            <button onClick={onClick}>
              <FontAwesomeIcon icon={faTimes} className="text-[40px]" />
            </button>{" "}
          </div>
          <form className="mt-5 space-y-4 md:w-2/3">
            <CustomInput
              label="Product Name"
              name="name"
              type="text"
              placeholder="Name"
              className="overflow-hidden"
            />
            <CustomInput
              label="Subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="overflow-hidden"
            />

            <div>
              <label
                htmlFor="message"
                className="font-montserrat text-xs text-[#080a0b] font-medium leading-4"
              >
                Message
              </label>
              <textarea
                placeholder="Message"
                className="w-full rounded-md shadow-lg border border-gray-50 p-2"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-black py-2 rounded flex items-center justify-center px-10 space-x-5"
            >
              <p>Send</p>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalSendMessage;
