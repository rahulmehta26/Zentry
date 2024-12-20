/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(0);

  const totalVideos = 4;

  const nextVidRef = useRef(null);

  const handleMiniVideo = () => {
    setHasClicked(true);

    setCurrentIndex(upComingVideoIndex);
  };

  const getVideo = (index) => `videos/hero-${index}.mp4 `;

  const handleVideoLoad = () => {
    setLoadingVideos((prev) => prev + 1);
  };

  const upComingVideoIndex = (currentIndex % totalVideos) + 1;

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", {
          visibility: "visible",
        });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVidRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(0 0, 100% 0, 36.5% 100%, 00% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  useEffect(() => {
    if (loadingVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadingVideos]);

  return (
    <div className=" relative h-dvh w-screen overflow-hidden ">
      <div
        id="video-frame"
        className=" relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 "
      >
        <div>
          <div className=" mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
            <div
              onClick={handleMiniVideo}
              className=" origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 "
            >
              <video
                loop
                ref={nextVidRef}
                src={getVideo(upComingVideoIndex)}
                muted
                id="current-video"
                className=" size-64 origin-center scale-150 object-cover object-center "
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVidRef}
            src={getVideo(currentIndex)}
            loop
            muted
            id="next-video"
            className=" absolute-center invisible absolute z-20 size-64 object-cover object-center "
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideo(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className=" absolute left0 top-0 size-full object-cover object-center "
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className=" special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 ">
          G<b>a</b>ming
        </h1>

        <div className=" absolute left-0 top-0 z-40 size-full ">
          <div className=" mt-24 px-5 sm:px-10 ">
            <h1 className=" special-font hero-heading text-blue-50 -tracking-widest ">
              redefi<b>n</b>
              <b>e</b>
            </h1>

            <p className=" mb-5 max-w-64 font-robert-regular text-blue-100 ">
              Enter the Metagame Layer <br />
              Unleash the Play Economy
            </p>

            <CustomButton
              id="watch-trailer"
              title="Watch Trailer"
              customContainer=" !bg-yellow-300 flex-center gap-1"
              leftIcon={<TiLocationArrow className=" size-4 " />}
            />
          </div>
        </div>
      </div>

      <h1 className=" special-font hero-heading absolute bottom-5 right-5 text-[#000] ">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default HeroSection;
