import { ChevronLeft, ChevronRight, MessageSquareOff } from "lucide-react";
import {
  NoReviews,
  ReviewCard,
  SortReviews,
  TotalRatingCard,
  useShowReviews,
} from "../features/review";
import { Loading } from "../components";

export default function ShowReview() {
  const {
    resData,
    reviews,
    loading,
    error,
    sortOption,
    setSortOption,
    displayedReviews,
    hasMoreReviews,
    toggleShowAll,
  } = useShowReviews({ initialVisible: 3, initialSort: "newest" });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className=" mx-auto p-0 space-y-1  md:px-5">
      {resData?.breakdown?.length ? (
        <div className="flex flex-col  flex-9 items-center gap-0 mx-auto md:flex-row md:items-start">
          {/* Left section: Rating card */}
          <div className="md:w-3/9 w-full">
            <TotalRatingCard
              review={resData!}
              totalCount={resData.totalRatings}
            />
          </div>

          {/* Right section: Reviews */}
          <div className="md:w-6/9 w-full space-y-5">
            <div className="flex justify-between items-center pt-6">
              <h2 className="text-lg font-semibold">Customer say</h2>
              <SortReviews
                sortOption={sortOption}
                setSortOption={setSortOption}
              />
            </div>
            <p className=" text-[14px] text-[#0f1111] ">
              Customers have mixed opinions about the book's quality and value
              for money some find it worth the price while others consider it
              poor quality and not worth the investment. The book receives
              negative feedback for stability, with flimsy back arms and books
              sliding off, and durability issues that cause it to break within
              30 days. The plastic construction is criticized as cheap, and the
              available angles are judged either too steep or too flat. Opinions
              on weight capacity are mixed as well: some say it's suitable for
              lighter books, while others note it's not designed for heavy
              volumes.
            </p>

            {displayedReviews?.length ? (
              <div className="">
                {displayedReviews.map((rev, index) => (
                  <ReviewCard
                    key={rev.id ?? `${rev.createdAt ?? "no-date"}-${index}`}
                    rev={rev}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center text-gray-500">
                <MessageSquareOff className="w-12 h-12 mb-3 text-gray-400" />
                <p className="text-lg font-medium">No reviews yet</p>
                <p className="text-sm text-gray-400">
                  Be the first to share your thoughts!
                </p>
              </div>
            )}
            <hr />
            {(reviews?.length ?? 0) > 3 && (
              <div className="flex justify-start p-0">
                <span
                  onClick={toggleShowAll}
                  className="text-[#4255cc] text-[14px] font-bold hover:underline hover:text-[#2f41b4] transition-colors"
                >
                  {hasMoreReviews ? (
                    <div className="flex flex-row items-center gap-0.5">
                      See more reviews <ChevronRight size={10} />
                    </div>
                  ) : (
                    <div className="flex flex-row items-center gap-0.5">
                      See less reviews <ChevronLeft size={10} />
                    </div>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <NoReviews />
      )}
    </div>
  );
}
