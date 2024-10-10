import Link from "next/link";
import { Instagram, Mail, MoveRight } from "lucide-react";
import NavbarStructure from "@/components/common/mobile/sidemenu/sidebar-structure";
import NavLink from "./nav-link";
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

export default function Nav() {
  return (
    <NavbarStructure
      heading={userInfo.userName}
      links={links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.text}
        </NavLink>
      ))}
      extraLinks={otherLinks.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.text}
        </NavLink>
      ))}
      socialMedia={
        <>
          <Link href={userInfo.instragramLink}>
            <Instagram />
          </Link>
          <Link href="mailto:example@example.com">
            <Mail />
          </Link>
        </>
      }
      footer={
        <Link
          href={"https://www.theeverydaymatters.co/"}
          className="text-[14px] text-gray-500 flex items-center gap-1 group min-h-[24px] transition-all duration-300 px-4"
        >
          <span>The Every Day Matters</span>
          <MoveRight className="group-hover:ml-2 transition-all duration-300" />
        </Link>
      }
    />
  );
}
