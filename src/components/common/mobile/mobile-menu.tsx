import Link from "next/link";
import SideMenu from "./sidemenu";
import { userInfo } from "@/lib/constants";

const MobileMenu = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/">
        <p className="text-2xl">{userInfo.userName}</p>
      </Link>
      <SideMenu />
    </div>
  );
};

export default MobileMenu;
