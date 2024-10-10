"use client";
import { useState, ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";
import Link from "next/link";
import NavLink from "../../navbar/nav-link";
import { userInfo } from "@/lib/constants";

const links = [
  { href: "/recent-photography", text: "Recent" },
  { href: "/personal", text: "Personal" },
  { href: "/commission", text: "Commission" },
  { href: "/travel", text: "Travel" },
  { href: "/about", text: "Info" },
];

const otherLinks = [
  { href: "/resume", text: "CV" },
  { href: "/contact", text: "Contact" },
];

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-white h-full flex flex-col justify-between py-10 px-4 transition-all duration-300"
      >
        <SheetHeader>
          <SheetDescription>
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.text}
              </NavLink>
            ))}
            {otherLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.text}
              </NavLink>
            ))}
          </SheetDescription>
        </SheetHeader>
        <div className="flex items-center gap-4 px-4 py-2">
          <Link href={userInfo.instragramLink}>
            <Instagram />
          </Link>
          <Link href="mailto:example@example.com">
            <Mail />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export default SideMenu;
