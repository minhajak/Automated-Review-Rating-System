import { Button } from "../../../components";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { MockData } from "../../../lib";
import { Link } from "react-router-dom";
import AnimatedProgressBar from "./AnimatedProgressBar";
import { RenderStars } from "..";
import { useState } from "react";

const TotalRatingCard = ({
  review,
  totalCount,
}: {
  review: MockData;
  totalCount: number;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col max-w-[340px] ">
      <div className="py-5 pl-0 pr-2 bg-gradient-to-br">
        <h1 className="sm:text-[24px] font-bold text-[#0F1111] ">
          Customer reviews
        </h1>
        <div className="pb-3">
          <div className="flex items-center gap-4">
            {/* <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pl-6">
              {review.average}
            </div> */}
            <div>
              <div className="flex items-center justify-center flex-row gap-2">
                <RenderStars n={review.average} size={18} />
                <span className="text-[18px]">{review.average} out of 5</span>
              </div>
              <div className="text-[14px] text-[#565959] mt-1">
                {review.totalRatings} Global ratings
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {review.breakdown.map((b, key) => {
            const pct = Math.round((b.count / totalCount) * 100);
            return (
              <div key={key} className="flex items-center gap-2">
                <div className="w-12 text-sm font-medium text-[#4255cc] text-right">
                  {b.stars} stars
                </div>
                <div className="flex-1">
                  <AnimatedProgressBar value={pct} />
                </div>
                <div className="w-10  text-sm text-left text-[#4255cc] font-medium">
                  {Math.round((b.count / review.totalRatings) * 100)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-2">
        <button
          className=" flex flex-row text-[14px] pb-4 text-blue-600 focus:underline cursor-pointer"
          aria-expanded={open}
          aria-controls="extra"
          onClick={() => setOpen((v) => !v)}
        >
          How are ratings calculated?
          {open ? (
            <ChevronUp className="text-black" size={20} />
          ) : (
            <ChevronDown className="text-black" size={20} />
          )}
        </button>
        <div id="extra" hidden={!open} className="text-[14px] text-[#0F1111]">
          Customers have mixed opinions about the book’s quality and value for
          money. Some readers find it worth the price, while others consider it
          poorly written and not worth the investment. The book receives
          negative feedback for its content structure, with some describing the
          plot as flimsy and the pacing uneven. Durability of the physical copy
          is also criticized, with reports of pages coming loose or tearing
          within a short time.
        </div>
      </div>
      <div className="flex flex-col items-center md:items-baseline justify-center">
        <hr className="text-[#d5d9d9] w-full h-[1px]" />
        <span className="text-[17px] font-bold pt-6">Review this Product</span>
        <span className="text-[14px] pb-3">
          Share your thoughts with other customers
        </span>
        <Link
          to={`/review-write`}
          className="flex justify-start w-full flex-3 px-5 md:px-0 md:pr-12 pb-7"
        >
          <Button
            variant={"ghost"}
            className="flex-2/3 focus:bg-[#F0F8FC] hover:text-gray-600  font-semibold bg-white text-gray-600 border-[1px] border-gray-700 text-[14px] rounded-xl"
          >
            Write a product review
          </Button>
        </Link>
        <hr className="text-[#d5d9d9] w-full h-[1px]" />
      </div>
    </div>
  );
};

export default TotalRatingCard;
