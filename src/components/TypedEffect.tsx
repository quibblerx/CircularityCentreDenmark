"use client";

import { TypeAnimation } from "react-type-animation";

const TypedEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Find partners, insights, and action opportunities tailored to you.",
        1000,
      ]}
      wrapper="p"
      cursor={true}
      repeat={0}
      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black mb-4 sm:mb-6 md:mb-7 lg:mb-8 text-left"
    />
  );
};

export default TypedEffect;
