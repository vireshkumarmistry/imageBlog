"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { memo, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavLink = memo(({ href, children, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={`flex items-center py-2 px-4 group transition-all duration-300 rounded-lg hover:bg-[#a6baff] hover:text-white ${
        isActive ? "text-white bg-[#a6baff]" : ""
      }`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
});

export default NavLink;
