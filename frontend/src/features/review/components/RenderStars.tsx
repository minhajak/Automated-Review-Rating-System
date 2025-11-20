import { Star } from "lucide-react";
import type { JSX } from "react";

export default function renderStars({
  n,
  size,
}: {
  n: number;
  size: number;
}): JSX.Element {
  const filled = Math.round(n);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
        
          key={i}
          size={size}
          fill={i < filled ? "currentColor" : "none"}
          className={i < filled ? "text-red-amazon" : "text-slate-300"}
        />
      ))}
    </div>
  );
}
