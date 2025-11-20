import React from "react";
import type { NavigateFunction } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  Input,
  Textarea,
  Label,
  Loading,
} from "../../../components";

import useReviewForm from "../hooks/useWriteReview";
import ShowRatingHidden from "./ShowRatingHidden";
import ToolTipCard from "./ToolTipCard";

const ReviewForm = ({ navigate }: { navigate: NavigateFunction }) => {
  const warningsList: string[] = [
    "Body should not be empty.",
    "Title must be at least 5 characters.",
    "Description should not exceed 250 characters.",
    "Only alphanumeric characters are allowed.",
    "Make sure to fill all required fields.",
  ];
  const {
    body,
    onChangeBody,
    handleSubmit,
    isSubmitting,
    submitted,
    onChangeTitle,
    title,
    author,
    onChangeAuthor,
    isPending,
    setSubmitted,
    rating,
    errors,
  } = useReviewForm({ navigate });

  if (isPending) {
    return <Loading />;
  }
  return (
    <>
      <Card className=" border-0 shadow-none rounded-none overflow-hidden ">
        <CardContent className="p-2">
          <form onSubmit={handleSubmit} className="space-y-6 md:px-18">
            <div>
              <Label
                htmlFor="author"
                className="block text-[12px] sm:text-[14px]  font-[700] text-[#0f1111] mb-2"
              >
                Author's Name
              </Label>
              <Input
                type="text"
                id="author"
                value={author}
                onChange={onChangeAuthor}
                placeholder="Enter your name..."
                className="w-full px-4 py-2 ring-0 rounded-[3px] border-[#888c8c]  text-[#0f1111]  focus:ring-0"
              />
              {errors.author && (
                <span className="mt-1 block text-[12px] text-red-600">
                  {errors.author}
                </span>
              )}
            </div>
            {/* Title Input */}
            <div>
              <Label
                htmlFor="title"
                className="block text-[12px] sm:text-[14px] font-[700] text-[#0f1111] mb-2"
              >
                Title your review
              </Label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={onChangeTitle}
                placeholder="Summarize your opinion of this book"
                className="w-full px-4 min-h-[32px] rounded-[3px] ring-0  text-[#0f1111] border-[#888c8c]  focus:ring-0"
              />
              {errors.title && (
                <span className="mt-1 block text-[12px] text-red-600">
                  {errors.title}
                </span>
              )}
            </div>

            {/* Review Body */}
            <div>
              <div className="flex flex-row items-center align-middle justify-start">
                <Label
                  htmlFor="body"
                  className="block text-[12px] sm:text-[14px] font-[700] text-[#0f1111] mb-2"
                >
                  Write a review{" "}
                  <span className="font-[400] text-red-800">(required)</span>
                  <ToolTipCard warnings={warningsList} />
                </Label>
              </div>
              <Textarea
                id="body"
                rows={2}
                maxLength={500}
                cols={2}
                value={body}
                onChange={onChangeBody}
                placeholder="Share your thoughts on this book..."
                className="w-full h-[107px] px-3 py-1  rounded-[3px] text-[#0f1111]  resize-y border-[1px] border-[#888c8c] focus:ring-0"
                required
              />
              

              {errors.body && (
                <span className="mt-1 block text-[12px] text-red-600">
                  {errors.body}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-0 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ffd814] hover:bg-[#f4ce0e]  text-[#0f1111] rounded-[17px] transition-all duration-300 min-w-[100px] px-7.5 py-1.5 h-8 "
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <ShowRatingHidden
        rating={rating as number}
        submitted={submitted}
        onClose={() => {
          setSubmitted(false);
        }}
      />
    </>
  );
};

export default React.memo(ReviewForm);
