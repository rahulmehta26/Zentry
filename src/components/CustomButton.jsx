/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

const CustomButton = ({
  id,
  title,
  leftIcon,
  customContainer,
  rightIcon = "",
}) => {

  const audioRef = useRef(null);

  return (
    <button
      id={id}
      className={` group relative  z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-[#000] ${customContainer} `}
      style={{
        clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
        transition: "clip-path ease-in-out", 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.clipPath =
          "polygon(100% 15%, 100% 100%, 0 100%, 0 0)"; 
          e.currentTarget.style.borderRadius = "2px";
          audioRef.current.play();
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.clipPath =
          "polygon(100% 0, 100% 100%, 0 100%, 0 0)"; 
          e.currentTarget.style.borderRadius = "9999px";
      }}
    >
      {leftIcon}
      <span className=" relative incline-flex overflow-hidden font-general text-xs uppercase ">
        <div>{title}</div>
      </span>
      {rightIcon}

      <audio 
      ref={audioRef} 
      src="/audio/button_audio.mp3"
      muted
      loop 
      />
    </button>
  );
};

export default CustomButton;
