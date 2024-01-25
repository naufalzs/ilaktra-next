import React from "react";
import cx from "classnames";

const Button = ({ isSave, isAdd, isBack, onClick, className }) => {
  return (
    <button
      className={cx(
        "box-border cursor-pointer px-2 py-0 border-0 outline-none rounded-md shadow-btn font-montserrat text-black text-sm leading-4",
        {
          "bg-primary top-[608px] left-[898px] w-[163px] h-[46px]": isSave,
          "bg-primary top-[619px] left-[944px] w-[120px] h-[36px]": isAdd,
          "bg-[#e0fef8] top-[619px] left-[804px] w-[120px] h-[36px]": isBack,
        },
        className
      )}
      onClick={onClick}
    >
      {isSave ? "Save Changes" : isAdd ? "Add" : "Back"}
    </button>
  );
};

export default Button;
