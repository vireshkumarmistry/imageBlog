"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "./nav-link";

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
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#bfb6ae] h-full">
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
