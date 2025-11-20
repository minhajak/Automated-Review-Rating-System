// ShowRatingHidden.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import { ChevronLeft, XIcon } from "lucide-react";
import { RenderStars } from "..";

type Props = {
  submitted: boolean;
  rating?: number;
  onClose?: () => void;
};

const ShowRatingHidden: React.FC<Props> = ({ submitted, rating, onClose }) => {
  if (!submitted) return null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rating-success-heading"
    >
      {/* Backdrop with click handler */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm rounded-[8px] bg-white/95 dark:bg-slate-900/95
                   shadow-2xl border border-white/30 dark:border-slate-800/60
                   p-6 text-center transform transition-all duration-200 ease-out
                   animate-in fade-in-90 zoom-in-90"
      >
        <h3
          id="rating-success-heading"
          className="text-lg font-semibold mb-1 text-slate-800 dark:text-slate-100"
        >
          Review submitted!
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-300 mb-4">
          We received your review.
        </p>

        <div className="flex items-center justify-center gap-4 mb-3">
          <div
            className="text-xl tracking-wider"
            aria-label={`Rating: ${rating} out of 5`}
          >
            <RenderStars n={rating as number} size={24} />
          </div>
          <div className="text-[18px] font-[500] text-[#0f1111]">
            {(rating ?? 0).toFixed(0)} out of 5
          </div>
        </div>

        <div className="mt-4">
          <Link to="/" onClick={handleClose}>
            <Button
              className="text-sm bg-gradient-to-bl bg-[#ffd814] hover:bg-[#ffd814] p-0 border-0 
                         text-[#0f1111] rounded-xl transition-all 
                         duration-100"
            >
              <ChevronLeft size={16} className="" />
              Go back
            </Button>
          </Link>
        </div>

        {/* Close button for better accessibility */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 text-[#7f8383]"
          aria-label="Close dialog"
        >
          <XIcon size={16} />
        </button>
      </div>
    </div>
  );
};

export default ShowRatingHidden;
