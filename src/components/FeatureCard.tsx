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
      className="bg-white border border-gray-100 flex flex-col p-12 gap-4 w-[320px] lg:w-[344px] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200 mx-auto"
      style={{ boxSizing: "border-box" }}
    >
      <div className="flex-grow">
        <div className="w-16 h-16 relative flex items-start justify-start mb-4">
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
        </div>
        <h3 className="font-manrope font-bold text-2xl lg:text-3xl leading-tight text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex justify-end items-end mt-4">
        <button
          onClick={onClick}
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
};

export default FeatureCard;
