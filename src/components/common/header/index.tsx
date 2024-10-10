import Link from "next/link";
import { MoveLeft } from "lucide-react";
import CustomButton from "../buttons";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="w-full flex items-center justify-between p-4">
      <CustomButton icon={<MoveLeft />} buttonText="Back" />
      <h2 className="text-2xl font-semibold flex-grow text-center">
        <Link href="/" className="hover:underline">
          {title}
        </Link>
      </h2>
    </header>
  );
};

export default Header;
