import { Skeleton } from "@/components/ui/skeleton";
import RootHeaderStructure from "../header/root-header-structure";

const HeaderSkeleton = () => {
  return (
    <RootHeaderStructure>
      <div className="space-y-8 w-full">
        <Skeleton className="h-4 w-[200px] bg-gray-400" />
      </div>
    </RootHeaderStructure>
  );
};

export default HeaderSkeleton;
