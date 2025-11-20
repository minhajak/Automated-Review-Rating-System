import { ChevronRight, MessageSquareOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";

export default function NoReviews(){
    return(<div className="flex flex-col items-center justify-center py-10 text-center text-gray-500 backdrop-blur-3xl">
          <MessageSquareOff className="w-12 h-12 mb-3 text-gray-400" />
          <p className="text-lg font-medium">No reviews yet...</p>
          <p className="text-sm text-gray-400">
            Be the first to share your thoughts!
          </p>
          <Link to={`/review-write`} className=" py-3 px-3 ">
            <Button className="text-[12px] bg-gradient-to-r from-gray-400 to-slate-500 border-0 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-100 transform hover:-translate-y-1">
              Write a product review
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>)
}