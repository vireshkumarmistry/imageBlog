import Link from "next/link";
import { Instagram, Mail, MoveRight } from "lucide-react";
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

export default function Nav() {
  return (
    <nav className="p-4 h-screen overflow-auto min-w-[240px] flex flex-col justify-around hidden lg:flex">
      <div className="flex flex-col gap-8">
        <div className="grid gap-8">
          <h3 className="text-[#1b1b1b] text-[30px] whitespace-pre">
            <Link href="/" className="hover:underline">
              Rita Harper
            </Link>
          </h3>
          <div>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </div>
          <div>
            {otherLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-8">
            <Link href={"https://www.instagram.com/__rita.p/"}>
              <Instagram />
            </Link>
            <Link href="mailto:example@example.com">
              <Mail />
            </Link>
          </div>
          <Link
            href={"https://www.theeverydaymatters.co/"}
            className="text-xs text-muted-foreground opacity-50 flex gap-1 group items-center min-h-[24px]"
          >
            <span>The Every Day Matters</span>
            <MoveRight className=" hidden group-hover:block opacity-0 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
