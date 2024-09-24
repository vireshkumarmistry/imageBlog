import Link from "next/link";
import PreviousButton from "./previous-button";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex items-center">
      <PreviousButton />
      <h2 className="text-2xl font-semibold flex items-center w-full justify-center">
        <Link href="/" className="hover:underline mx-auto">
          {title}
        </Link>
      </h2>
    </div>
  );
};

export default Header;
