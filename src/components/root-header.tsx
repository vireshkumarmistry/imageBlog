import { Mail } from "lucide-react";
import MobileMenu from "./mobile-menu";
import Link from "next/link";

const RootHeader = () => {
  return (
    <div className="border-b-[1px] p-2 border-[#54545480] w-full flex gap-2 justify-between items-center">
      <Link
        href="/contact"
        className="hover:underline text-sm hidden lg:flex items-center gap-2"
      >
        <Mail size={24} />
        ritaharperphoto@gmail.com
      </Link>

      <div className="flex lg:hidden w-full">
        <MobileMenu />
      </div>
    </div>
  );
};

export default RootHeader;
