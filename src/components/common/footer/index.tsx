import { userInfo } from "@/lib/constants";
import Container from "../other/container";

export function Footer() {
  return (
    <footer className="border-t border-[#54545480] w-full">
      <Container>
        <div className="flex items-center justify-center gap-2 lg:gap-5 pt-4 flex-nowrap">
          <span className="text-sm  text-[#1b1b1b] line-clamp-1">
            {userInfo.userName} Photography
          </span>
          <span className="text-sm text-[#1b1b1b] line-clamp-1">
            © 2024 All Rights Reserved
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
