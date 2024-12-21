/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

const TiltCard = ({ children, className, props }) => {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

      const relativeX = (e.clientX - left) / width - 0.5;
      const relativeY = (e.clientY - top) / height - 0.5;
  
      const tiltX = relativeY * 10;
      const tiltY = -relativeX * 10; 

    const newTransform = ` perspective(700pX) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98) `;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
    
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      {...props}
    >
      {children}
    </div>
  );
};

export default TiltCard;
