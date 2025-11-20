import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components";


export default function SortReviews({
  sortOption,
  setSortOption,
}: {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="relative max-w-[120px]">
      <Select value={sortOption} onValueChange={setSortOption} >
        <SelectTrigger
          size="sm"
          className="h-6 px-2 bg-white font-[400] border-gray-400 text-gray-900 text-[12px] rounded-lg  [&>svg]:stroke-black [&>svg]:text-black"
        >
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-white text-gray-900 border-none " align="end">
          <SelectItem value="newest">newest</SelectItem>
          <SelectItem value="oldest">oldest</SelectItem>
          <SelectItem value="highest">highest rated</SelectItem>
          <SelectItem value="lowest">lowest rated</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
