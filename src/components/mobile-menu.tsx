import Link from "next/link";
import { Mail } from "lucide-react";
import SideMenu from "./side-menu";

const MobileMenu = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/">
        <p className="text-2xl">Rita Harper</p>
        <p className="text-[11px] text-[#424141] leading-[0]">Visual Journalist</p>
        <Mail size={24} className="mt-3"/>
      </Link>
      <SideMenu />
    </div>
  );
};

export default MobileMenu;
