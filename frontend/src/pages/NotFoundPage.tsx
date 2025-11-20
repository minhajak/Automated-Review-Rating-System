import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-6">
      <h1 className="text-2xl font-bold text-[#0f1111]">404 | Page Not Found</h1>
      <Link to={"/"} className="rounded-[15px]  px-3 py-2 bg-white text-gray-500  hover:underline transition-all">Go back to reviews</Link>
    </div>
  );
};

export default ErrorPage;
