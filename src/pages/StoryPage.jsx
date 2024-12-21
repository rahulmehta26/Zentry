/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import AnimateTitle from "../components/AnimateTitle";
import gsap from "gsap";
import CustomButton from "../components/CustomButton";

const StoryPage = () => {
  const imageRef = useRef("null");

  const handleMouseLeave = () => {
    const element = imageRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = imageRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className=" min-h-dvh w-screen bg-[#000] ">
      <div className=" flex size-full flex-col items-center py-10 pb-24 ">
        <p className=" font-general text-[#fff] text-sm uppercase md:text-[0.9rem] ">
          The multiversal IP world
        </p>

        <div className=" relative text-[#fff] size-full ">
          <AnimateTitle
            title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerStyle=" mt-5 pointer-events-none mix-blend-difference relative z-10 "
          />

          <div className="story-img-container">
            <div className=" story-img-mask ">
              <div className=" story-img-content">
                <img
                  ref={imageRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/images/entrance.webp"
                  alt="entrance"
                  className=" object-contain "
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" -mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end ">
          <div className=" flex h-full w-fit flex-col items-center md:items-start ">
            <p className=" mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start ">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <CustomButton
              id="realm-button"
              title="discover prologue"
              customContainer="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryPage;
