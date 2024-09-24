import Link from "next/link";
import { Mail } from "lucide-react";
import SideMenu from "./side-menu";

const MobileMenu = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/">
        <p className="text-2xl">Rita Harper</p>
      </Link>
      <SideMenu />
    </div>
  );
};

export default MobileMenu;
