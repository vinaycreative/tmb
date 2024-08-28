import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

const Rating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `inline-flex items-center gap-1.5 rounded-md border bg-gradient-to-r px-2 py-[3px] text-sm font-semibold shadow-inner`,
        className,
        {
          "border-green-100.50 from-green-400/30 to-green-400/20 text-green-400":
            rating > 7.9,
          "border-yellow-100/50 from-yellow-200/30 to-yellow-200/20 text-yellow-500":
            rating > 6.9 && rating < 7.9,
          "border-emerald-100/50 from-emerald-200/30 to-emerald-200/20 text-emerald-400":
            rating > 5.9 && rating <= 6.9,
          "border-red-100/50 from-red-200/30 to-red-200/20 text-red-400":
            rating > 4 && rating <= 5.9,
          "border-gray-100/50 from-gray-200/30 to-gray-200/20 text-gray-400":
            rating <= 4, // Handle low ratings with a neutral color
        },
      )}
    >
      <Star size={15} className="fill-current" /> {rating.toFixed(1)}
    </div>
  );
};

export default Rating;
