/* eslint-disable no-unused-vars */
import React from "react";

const Loading = () => {
  return (
    <div className=" flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50 ">
      <div className=" three-body ">
        <div className=" three-body_dot " />
        <div className=" three-body_dot " />
        <div className=" three-body_dot " />
      </div>
    </div>
  );
};

export default Loading;
