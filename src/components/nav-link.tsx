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
      className={`flex items-center gap-2 group p-[0.9rem] rounded-md -ml-2 transition-all text-sm hover:underline ${
        isActive ? "text-[#a05921]" : ""
      }`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
});

export default NavLink;
