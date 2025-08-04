import React from "react";
import { Search, BookOpen, MapPin, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: "discover" | "learn" | "act";
  title: string;
  description: React.ReactNode;
  onClick?: () => void;
}

const iconComponents = {
  discover: Search,
  learn: BookOpen,
  act: MapPin,
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  const Icon = iconComponents[icon];

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200 flex flex-col">
      {/* Icon */}
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

      {/* Description */}
      <div className="text-gray-600 mb-6 leading-relaxed flex-grow">
        {description}
      </div>

      {/* Arrow Button - Right aligned */}
      <div className="flex justify-end">
        <button
          onClick={onClick}
          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors duration-200 group"
        >
          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
