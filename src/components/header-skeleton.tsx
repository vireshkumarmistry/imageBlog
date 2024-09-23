import { Skeleton } from "@/components/ui/skeleton";

const HeaderSkeleton = () => {
  return (
    <div className="space-y-8 w-full">
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
    </div>
  );
};

export default HeaderSkeleton;
