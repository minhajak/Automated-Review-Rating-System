import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components";
import type { Review } from "../../../lib";
import { formatTimeAgo } from "../../../utils";
import useInitials from "../../../hooks/useInitials";
import { RenderStars } from "..";

const ReviewCard = ({ rev }: { rev: Review }) => {
  const { initials } = useInitials({ author: rev.author });
  const [expanded, setExpanded] = useState(false);

  if (!rev) return null;

  return (
    <div className="border-0 p-0 py-3 rounded-none shadow-none">
      <div className=" py-0 px-1 pt-0">
        <div className="flex flex-row items-center">
          <Avatar className="w-6 h-6 border border-gray-200">
            <AvatarImage
              src={`https://m.media-amazon.com/images/S/amazon-avatars-global/default._AA460_.png`}
            />
            <AvatarFallback className="bg-gray-100 text-xs text-gray-600">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="px-2 text-[13px]">{rev.author}</span>
        </div>
        <div className="flex items-start gap-2 pt-1">
          <div className="flex-1 min-w-0">
            <div className="flex flex-row items-center align-middle gap-1 justify-start">
              <div className="flex items-center pt- mt-0.5">
                <RenderStars n={rev.rating} size={14} />
              </div>
              <div className="text-gray-800  pl-1 text-[13px] font-semibold">
                {rev.title}
              </div>
            </div>

            <div className=" flex flex-row items-center mx-auto size-auto text-[14px]">
              <span className=" text-slate-600 font-extralight">
                Reviewed in india
              </span>
              <span className="text-[#DDDDDD] text-[14px] px-1">|</span>
              <div className=" text-slate-600 ">
                {formatTimeAgo(rev.createdAt)}
              </div>
              <span className="text-[#DDDDDD] text-[14px] px-1">|</span>
              <span className="font-semibold text-[#C45500] text-[12px]">
                verified purchase
              </span>
            </div>

            <p
              className={`text-[14px] text-shadow-slate-900 leading-relaxed pt-1 transition-all duration-300 ${
                expanded ? "" : "line-clamp-1"
              }`}
            >
              {rev.body}
            </p>

            {rev.body && rev.body.length > 123 && (
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-1 text-gray-600 text-xs font-medium hover:underline focus:outline-none"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center gap-1 pt-2">
          <button className="text-[#3a3939] text-[14px]  border rounded-2xl px-6 py-1 border-black hover:bg-gray-100 transition-all">
            Helpful
          </button>
          <span className="text-[#DDDDDD] text-[14px] px-1">|</span>
          <button className="text-[#565959] text-[14px] hover:underline">Report</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
