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
      className="bg-white border border-gray-100 flex flex-col justify-center items-center p-6 lg:p-8 gap-2 w-full max-w-[344px] lg:w-[344px] h-auto lg:h-[314px] min-h-[280px] lg:min-h-[314px] rounded-[32px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:shadow-xl transition-shadow duration-200 mx-auto"
      style={{ boxSizing: "border-box" }}
    >
      {/* Main content wrapper */}
      <div className="flex flex-col justify-between items-end p-0 gap-4 lg:gap-2 w-full max-w-[245px] h-full lg:h-[250px] flex-grow">
        {/* Content section */}
        <div className="flex flex-col items-start p-0 gap-4 lg:gap-2 w-full max-w-[245px] flex-grow">
          {/* Icon */}
          <div className="w-16 h-16 relative flex items-start justify-start">
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          {/* Title */}
          <h3 className="font-manrope font-bold text-2xl lg:text-[32px] leading-8 lg:leading-[40px] text-gray-900">
            {title}
          </h3>

          {/* Description */}
          <div className="font-nunito-sans text-black font-normal text-sm lg:text-base leading-5 lg:leading-6 w-full max-w-[245px]">
            {description}
          </div>
        </div>

        {/* Arrow Button */}
        <div className="flex justify-end w-full">
          <button
            onClick={onClick}
            className="w-10 lg:w-[50px] h-10 lg:h-[50px] bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors duration-200 group"
            style={{
              filter: "drop-shadow(0px 60px 100px rgba(16, 45, 97, 0.08))",
            }}
          >
            <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
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
