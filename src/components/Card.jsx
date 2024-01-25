import React from "react";
import Image from "next/image";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGlobe,
  faUser,
  faChevronRight,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Button = ({ text, icon, isDelete, onClick }) => (
  <button
    className={cx(
      "box-border bg-primary px-4 py-2 w-fit flex items-center justify-center border-0 outline-none rounded-md shadow-btn font-montserrat  text-sm leading-4 space-x-3",
      {
        "bg-secondary text-[#fe3131]": isDelete,
        "text-black": !isDelete,
      }
    )}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} height={16} />
    <p>{text}</p>
  </button>
);

const Card = ({ item, isRFQ, isSeller, onClick }) => (
  <div
    className={cx(
      "bg-white border-gray-100 border shadow flex space-x-6 w-[95%]",
      {
        "rounded px-4 md:px-6 py-4 w-full md:w-[95%]": isRFQ,
        "rounded-3xl p-4 flex-col md:flex-row md:space-y-0 w-[95%]": !isRFQ,
      }
    )}
  >
    {!isRFQ && (
      <div className="flex items-center">
        <Image
          src="/images/tshirt.jpeg"
          width={250}
          height={250}
          alt={item.name}
          className={cx({
            "w-[35rem] object-cover": !isSeller,
            "w-full md:w-[15rem] ": isSeller,
          })}
        />
      </div>
    )}

    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col space-x-3 ">
        <p className="font-montserrat text-[#030303] text-xl leading-[26px]">
          {item.name}
        </p>
        <div className="md:my-0 my-2">
          {item.category.map((cat, index) => (
            <span
              key={index}
              className="text-sm text-gray-600 bg-secondary px-3 py-1 rounded-lg shadow mr-2"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      {isSeller && (
        <p className="my-2 w-full md:w-4/5 font-montserrat text-base text-black leading-[21px]">
          MOQ: {" " + item.moq}
        </p>
      )}
      <p
        className={cx(
          "flex-1 w-full md:w-4/5 font-montserrat text-base text-black leading-[21px]",
          { "py-4": isRFQ, "my-2": !isRFQ }
        )}
      >
        {item.description}
      </p>
      {isRFQ ? (
        <div className="flex space-x-5">
          <span className="space-x-3 text-black w-fit  flex items-center justify-center text-sm">
            <FontAwesomeIcon icon={faUser} />
            <p>{item.seller}</p>
          </span>
          <span className="space-x-3 text-black w-fit  flex items-center justify-center text-sm">
            <FontAwesomeIcon icon={faGlobe} />
            <p>{item.destination}</p>
          </span>
          <span className="space-x-3 text-black w-fit  flex items-center justify-center text-sm">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{item.quantity}</p>
          </span>
        </div>
      ) : isSeller ? (
        <Button text="Send Message" icon={faChevronRight} onClick={onClick} />
      ) : (
        <div className="flex space-x-3">
          <Button text="Edit" icon={faPencil} />
          <Button text="Delete" icon={faTrash} isDelete />
        </div>
      )}
    </div>
  </div>
);

export default Card;
