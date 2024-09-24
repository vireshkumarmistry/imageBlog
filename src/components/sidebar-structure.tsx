import Link from "next/link";

const NavbarStructure = ({
  heading,
  links,
  extraLinks,
  socialMedia,
  footer,
}: any) => {
  return (
    <nav className="h-[calc(100vh-35px)] min-w-[240px] flex-col hidden lg:flex bg-white rounded-2xl sticky top-4">
      <div className="flex flex-col gap-8 h-full">
        <div className="flex flex-col justify-between h-full py-4 px-2 overflow-auto">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="text-[#1b1b1b] text-[30px] whitespace-pre px-4 py-2"
            >
              {heading}
            </Link>
            <div className="flex flex-col gap-1 box-border">{links}</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 box-border">{extraLinks}</div>
            <div className="flex items-center gap-5 px-4">{socialMedia}</div>
          </div>
          {footer}
        </div>
      </div>
    </nav>
  );
};

export default NavbarStructure;
