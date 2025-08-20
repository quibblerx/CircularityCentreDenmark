import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  icon: "discover" | "learn" | "act";
  title: string;
  description: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const iconPaths = {
  discover: "/icon_discover.svg",
  learn: "/icon_learn.svg",
  act: "/icon_act.svg",
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  onClick,
  href,
}) => {
  const iconSrc = iconPaths[icon];

  const cardContent = (
    <div
      className="bg-white border border-gray-100 flex flex-col justify-center items-center p-6 lg:p-8 gap-2 w-[320px] lg:w-[344px] h-[320px] lg:h-[350px] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200 mx-auto"
      style={{ boxSizing: "border-box" }}
    >
      {/* Main content wrapper */}
      <div className="flex flex-col justify-between items-end p-0 gap-2 w-full max-w-[240px] h-full">
        {/* Content section */}
        <div className="flex flex-col items-start p-0 gap-2 w-full max-w-[240px] flex-grow">
          {/* Icon */}
          <div className="w-16 h-16 relative flex items-start justify-start">
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="font-manrope font-bold text-2xl lg:text-3xl leading-tight text-gray-900">
            {title}
          </h3>

          {/* Description */}
          <div className="font-nunito-sans text-black font-normal text-sm lg:text-base leading-relaxed w-full max-w-[240px]">
            {description}
          </div>
        </div>

        {/* Arrow Button */}
        <div className="flex justify-end w-full">
          <button
            onClick={onClick}
            className="w-12 lg:w-14 h-12 lg:h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors duration-200 group"
            style={{
              filter: "drop-shadow(0px 60px 100px rgba(16, 45, 97, 0.08))",
            }}
          >
            <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
};

export default FeatureCard;
