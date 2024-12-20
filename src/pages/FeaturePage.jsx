/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import TiltCard from "../components/TiltCard";

const BentoCard = ({ title, description, src }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseToggle = (state) => {
    setIsClicked(state);
  };

  return (
    <div
      className={` ${
        isClicked ? "cursor-grabbing" : "cursor-grab"
      } relative siz h-full`}
      onMouseDown={() => handleMouseToggle(true)}
      onMouseUp={() => handleMouseToggle(false)}
    >
      <video
        src={src}
        loop
        muted
        autoPlay
        className=" absolute left-0 top-0 size-full object-cover object-center "
      />

      <div className=" relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className=" bento-title special-font ">{title}</h1>

          {description && (
            <p className=" mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturePage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseToggle = (state) => {
    setIsClicked(state);
  };

  return (
    <section className=" bg-[#000] pb-52 ">
      <div className=" container mx-auto px-3 md:px-32 ">
        <div className=" py-32 ">
          <p className=" font-circular-web text-lg text-blue-50 ">
            Dive into the 'Game of Games&rsquo; Universe
          </p>

          <p className=" max-w-md font-circular-web text-lg text-blue-50 opacity-50 ">
            Immerse yourself in a rich and ever-expanding ecosystem where a
            vibrant array of products converge into an interconnected universe.
          </p>
        </div>

        <TiltCard className=" border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>a</b>nt
              </>
            }
            description="A cross-paltform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure "
          />
        </TiltCard>

        <div className=" grid h-[135vh] md:h-[200vh] grid-cols-2 grid-rows-3 gap-7 ">
          <TiltCard className=" bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Zigm<b>a</b>
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion. "
            />
          </TiltCard>

          <TiltCard className=" bento-titlt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  Nex<b>u</b>s
                </>
              }
              description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction "
            />
          </TiltCard>

          <TiltCard className=" bento-titlt_1 me-14  md:col-span-1 md:me-0 ">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive.  "
            />
          </TiltCard>

          <TiltCard className=" bento-tilt_2 ">
            <div
              className={` flex size-full flex-col justify-between bg-violet-300 p-5 ${
                isClicked ? "cursor-grabbing" : "cursor-grab"
              } `}
              onMouseDown={() => handleMouseToggle(true)}
              onMouseUp={() => handleMouseToggle(false)}
            >
              <h1 className=" bento-title special-font max-w-64 text-[#000] ">
                {" "}
                M<b>o</b>re Co<b>m</b>ing S<b>o</b>on{" "}
              </h1>

              <TiLocationArrow className=" m-5 scale-[5] self-end " />
            </div>
          </TiltCard>

          <TiltCard
            className={` bento-tilt_2 ${
              isClicked ? "cursor-grabbing" : "cursor-grab"
            } `}
            onMouseDown={() => handleMouseToggle(true)}
            onMouseUp={() => handleMouseToggle(false)}
          >
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className=" size-full object-cover object-center "
            />
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;
