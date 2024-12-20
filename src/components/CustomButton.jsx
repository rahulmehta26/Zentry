/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CustomButton = ({
  id,
  title,
  leftIcon,
  customContainer,
  rightIcon = "",
}) => {
  return (
    <button
      id={id}
      className={` group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-[#000] ${customContainer} `}
    >
      {leftIcon}
      <span className=" relative incline-flex overflow-hidden font-general text-xs uppercase ">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default CustomButton;
