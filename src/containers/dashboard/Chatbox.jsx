import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { H1 } from "@/components/Heading";
import { chatConversation } from "@/constants";

const Chatbox = () => {
  return (
    <>
      <div className="p-4 md:p-8 h-full">
        <H1>Message</H1>
        <div className="flex flex-col md:flex-row h-[95%] md:space-x-5">
          <div className="w-full md:w-1/3 shadow-lg border border-gray-100 rounded-3xl p-3 flex flex-col space-y-3 min-h-[20rem] overflow-y-auto mb-5 md:mb-0">
            {chatConversation.leftSideMessages.map((msg, index) => (
              <div
                key={index}
                className="shadow px-2 py-5 rounded-lg bg-secondary"
              >
                <div className="flex text-sm">
                  <p className="flex-1">{msg.name}</p>
                  <p>{msg.time}</p>
                </div>
                <div className="flex text-sm">
                  <p>You: </p>
                  <p className="flex-1 overflow-hidden whitespace-nowrap truncate">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/3 shadow rounded-3xl flex flex-col">
            <div className="w-full border-b px-5 py-4">
              <p>Faris Muhammad Abbasi</p>
              <span className="flex items-center">
                <span className="w-2.5 h-2.5 bg-primary rounded-full mr-2"></span>
                <p>Active Now</p>
              </span>
            </div>
            <div className="flex-1 w-full p-4 overflow-y-auto">
              {chatConversation.rightSideMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`w-full md:w-2/3 ${
                    msg.isSender ? "float-right" : "float-left"
                  }`}
                >
                  <p
                    className={`p-3 ${
                      msg.isSender ? "bg-primary text-white" : ""
                    } rounded shadow w-full`}
                  >
                    {msg.message}
                  </p>
                  <div className="flex mt-2 text-gray-300">
                    <small className="flex-1">{msg.sender}</small>
                    <small>{msg.time}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full px-5 mb-5">
              <div className="shadow border-gray-100 w-full flex py-2 pr-3">
                <input
                  type="text"
                  placeholder="Type here...."
                  className="py-3 px-3 flex-1"
                />
                <button
                  type="submit"
                  className="bg-secondary text-black py-2 rounded flex items-center justify-center px-5 space-x-2"
                >
                  <p>Send</p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
