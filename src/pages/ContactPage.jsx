/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CustomButton from "../components/CustomButton";
import TiltCard from "../components/TiltCard";

const ImageClip = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const ContactPage = () => {
  return (
    <div id=" contact " className=" my-20 min-h-96 w-screen px-10 ">
      <div className=" relative rounded-lg bg-[#000] py-24 text-blue-50 sm:overflow-hidden ">
        <TiltCard className=" absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 ">
          <ImageClip
            src="images/contact-1.webp"
            clipClass=" contact-clip-path-1 "
          />

          <ImageClip
            src="images/contact-2.webp"
            clipClass=" contact-clip-path-2 lg:translate-y-40 translate-y-60 "
          />
        </TiltCard>

        <TiltCard className=" absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 ">
          <ImageClip
            src="images/swordman-partial.webp"
            clipClass=" absolute md:scale-125 "
          />

          <ImageClip
            src="images/swordman.webp"
            clipClass=" sword-man-clip-path md:scale-125 "
          />
        </TiltCard>

        <div className=" flex flex-col items-center text-center ">
          <p className=" font-general text-[10px] uppercase ">Join Zentry</p>

          <p className=" special-font mt-10 w-full font-zentry-regular text-5xl leading-[0.9] md:text-[6rem] ">
            let’s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t
            <b>o</b>gether.
          </p>

          <CustomButton title="contact us" customContainer=" mt-10 " />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
