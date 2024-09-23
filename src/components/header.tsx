import Link from "next/link";
import PreviousButton from "./previous-button";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="w-full">
      <PreviousButton />
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight  mt-8 flex items-center w-full justify-center">
        <Link href="/" className="hover:underline mx-auto">
          {title}
        </Link>
      </h2>
    </div>
  );
};

export default Header;
