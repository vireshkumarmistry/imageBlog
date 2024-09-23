import { Skeleton } from "@/components/ui/skeleton";

const NavbarSkeleton = () => {
  return (
    <div className="space-y-8 flex flex-col justify-center mt-24 p-4">
      <Skeleton className="h-10 w-[200px] bg-gray-300" />
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
    </div>
  );
};

export default NavbarSkeleton;
