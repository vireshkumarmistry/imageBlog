import { Mail } from "lucide-react";
import MobileMenu from "../mobile/mobile-menu";
import Link from "next/link";
import RootHeaderStructure from "./root-header-structure";

const RootHeader = () => {
  return (
    <RootHeaderStructure>
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
    </RootHeaderStructure>
  );
};

export default RootHeader;
