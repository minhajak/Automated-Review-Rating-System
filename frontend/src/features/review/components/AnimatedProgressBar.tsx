import { useEffect, useState } from "react";

const AnimatedProgressBar = ({ value }: { value: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="h-6 bg-white border-[1.5px] border-gray-400 rounded-[3px]">
      <div  
        className={`h-full bg-red-amazon transition-all duration-1000 ease-out`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
export default AnimatedProgressBar;
