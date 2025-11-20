import { useCallback, useRef, useState, useTransition } from "react";
import type { NavigateFunction } from "react-router-dom";
import { createReview } from "../../../lib/axios/reviewInstance";
import { validateReview } from "../../../utils/inputValidator";
type FieldErrors = { author?: string; title?: string; body?: string };

export default function useWriteReview({
  navigate,
}: {
  navigate: NavigateFunction;
}) {
  const [author, setAuthor] = useState("jacob");
  const [title, setTitle] = useState("it is good!");
  const [body, setBody] = useState(
    "i like it it is a good book now it is my favorite book"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isMounted = useRef(true);
  const [isPending, startTransition] = useTransition();
  const [rating, setRating] = useState<number>(1);
  const [errors, setErrors] = useState<FieldErrors>({});

  // keep mounted flag to avoid state updates after unmount
  // (call from parent or use effect in hook consumer; simpler to set here:)
  // NOTE: the hook consumer must not unmount before the hook runs cleanup — it's safe.
  useRef(() => {
    return () => {
      isMounted.current = false;
    };
  });


  // Stable callbacks
  const onChangeAuthor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAuthor(e.target.value);
    },
    []
  );
  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const onChangeBody = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setBody(e.target.value);
    },
    []
  );

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);

      setErrors({}); // clear old errors

      const validation = validateReview({ author, title, body });
      const newErrors: FieldErrors = {
        author: validation.author.valid ? undefined : validation.author.reason,
        title: validation.title.valid ? undefined : validation.title.reason,
        body: validation.body.valid ? undefined : validation.body.reason,
      };

      if (!validation.valid) {
        setTimeout(() => {
          setIsSubmitting(false);
        }, 1500);
        setErrors(newErrors);
        return;
      }
      try {
        const result = await createReview({ author, title, body });
        console.log("Review created:", result);
        setRating(result.data.data.rating);

        if (!isMounted.current) return;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        startTransition(() => {
          setSubmitted(true);
        });
      } catch (error) {
        console.error("Failed to submit review:", error);
        // optional: show error UI
      } finally {
        if (isMounted.current) {
          setIsSubmitting(false);
        }
      }
    },
    [author, title, body, isSubmitting, navigate]
  );

  return {
    title,
    body,
    onChangeTitle,
    onChangeBody,
    handleSubmit,
    handleCancel,
    isSubmitting,
    submitted,
    setTitle,
    setBody,
    author,
    onChangeAuthor,
    setAuthor,
    isPending,
    rating,
    setSubmitted,
    errors,
  };
}
