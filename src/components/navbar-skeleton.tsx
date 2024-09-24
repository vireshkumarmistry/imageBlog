import { Skeleton } from "@/components/ui/skeleton";
import NavbarStructure from "./sidebar-structure";

const NavbarSkeleton = () => {
  const loader = (height: number, repeat: number = 1) =>
    Array.from({ length: repeat }, () => (
      <Skeleton className={`h-${height} w-full bg-gray-400`} />
    ));

  const linksLoader = (repeat: number = 1) => {
    return (
      <div className="py-2 px-4 flex flex-col gap-1 box-border">
        {loader(10, repeat)}
      </div>
    );
  };

  return (
    <NavbarStructure
      heading={loader(10)}
      links={linksLoader(5)}
      extraLinks={linksLoader(3)}
      footer={loader(8)}
    />
  );
};

export default NavbarSkeleton;
