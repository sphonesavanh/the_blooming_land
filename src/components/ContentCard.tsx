import type React from "react";

interface ContentCardProps {
  title: string;
  backgroundColor: string; // ex: "bg-blue-300"
  textColor?: string;
  decorativeElement?: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
}

export const ContentCard = ({
  title,
  backgroundColor,
  textColor = "text-black",
  size = "medium",
  onClick,
  className,
}: ContentCardProps) => {
  const sizeClasses = {
    small: "h-32 w-32",
    medium: "h-36 w-36",
    large: "h-44 w-44",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${backgroundColor}
        ${textColor}
        flex items-center justify-center
        text-center font-serif
        text-lg
        rounded-2xl
        cursor-pointer
        transition-transform
        hover:scale-105
        ${className ?? ""}
      `}
      onClick={onClick}
    >
      <h2 className="px-2">{title}</h2>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const DecorativeElement = {
  Circle: () => (
    <div className="w-20 h-20 border-4 border-white border-opacity-60 rounded-full" />
  ),

  Leaves: () => (
    <div className="flex space-x-2">
      <div className="w-6 h-12 bg-green-600 rounded-full transform rotate-12 opacity-80" />
      <div className="w-6 h-12 bg-green-700 rounded-full transform -rotate-12 opacity-80" />
      <div className="w-6 h-12 bg-green-500 rounded-full transform rotate-45 opacity-80" />
    </div>
  ),

  Starburst: () => (
    <div className="relative w-16 h-16">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-8 bg-white bg-opacity-60 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: "50% 100%",
            transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
          }}
        />
      ))}
    </div>
  ),

  Rainbow: () => <div className="w-16 h-8 border-4 border-red-500 rounded-t-full border-b-0" />,

  PaintStrokes: () => (
    <div className="relative w-20 h-16">
      <div className="absolute w-16 h-2 bg-blue-400 rounded-full transform rotate-12 top-2" />
      <div className="absolute w-12 h-2 bg-green-400 rounded-full transform -rotate-12 top-6" />
      <div className="absolute w-14 h-2 bg-yellow-400 rounded-full transform rotate-6 top-10" />
    </div>
  ),

  Fern: () => (
    <div className="relative w-12 h-16">
      <div className="absolute w-1 h-16 bg-white bg-opacity-60 rounded-full left-1/2 transform -translate-x-1/2" />
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-1 bg-white bg-opacity-60 rounded-full"
          style={{
            top: `${i * 2.5 + 2}px`,
            left: "50%",
            transform: `translateX(-50%) rotate(${i % 2 === 0 ? 30 : -30}deg)`,
          }}
        />
      ))}
    </div>
  ),
};
