/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import CustomButton from './CustomButton';
import { TiLocationArrow } from 'react-icons/ti';
import { navItems } from '../constant/navItems';
import gsap from 'gsap';

const Navbar = () => {

    const containerRef = useRef(null);
    const audioElement = useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);

        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {

        if(isAudioPlaying){
            audioElement.current.play();
        }else{
            audioElement.current.pause();
        }
    },[isAudioPlaying])

    const handleScroll = () => {
        const currentScroll = window.scrollY;
    
        if (currentScroll === 0) {
          setIsNavVisible(true);
          containerRef.current.classList.remove("floating-nav");
        } else if (currentScroll > lastScroll) {
          setIsNavVisible(false);
          containerRef.current.classList.add("floating-nav");
        } else if (currentScroll < lastScroll) {
          setIsNavVisible(true);
          containerRef.current.classList.add("floating-nav");
        }
    
        setLastScroll(currentScroll);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [lastScroll]);

    useEffect(() => {
          gsap.to(containerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.25
          })

    }, [isNavVisible])

  return (
     <div
     ref={containerRef}
     className=' fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 '
     >
        <header
        className=' absolute top-1/2 w-full -translate-y-1/2 '
        >
            <nav
            className=' flex size-full items-center justify-between p-4 '
            >
                <div
                className=' flex items-center gap-7 '
                >
                    <img 
                    src='/images/logo.png'
                    alt='logo'
                    className=' w-10 '
                    />

                    <CustomButton 
                    id='product-butto'
                    title='Products'
                    rightIcon={<TiLocationArrow />}
                    customContainer = ' bg-blue-50 md:flex hidden flex items-center justify-center gap-1 '
                    
                    />

                </div>

                <div
                className=' flex h-full items-center '
                >
                    <div
                    className=' hidden md:block '
                    >
                        {
                            navItems?.map((items, i) => (
                                <a
                                key={items}
                                className=' nav-hover-btn '
                                href={`#${items.toLowerCase()}`}
                                >
                                    {items}
                                </a>
                            ))
                        }

                    </div>

                    <button
                    onClick={toggleAudioIndicator}
                    className=' ml-10 flex items-center space-x-0.5 '
                    >
                        <audio 
                        ref={audioElement}
                        className=' hidden '
                        src='/audio/audio_loop.mp3'
                        loop
                        />

                        {
                        [1,2,3,4].map((bar) => (
                            <div
                            key={bar}
                            className={` indicator-line ${isIndicatorActive ? 'active:' : '' } `}
                            style={{
                                animationDelay: `${ bar * 0.1 }s`
                            }}
                            />

                        ) )  
                        }
                    </button>
                </div>
            </nav>
        </header>
     </div>
)
}

export default Navbar