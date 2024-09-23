import Container from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-[#54545480] w-full">
      <Container>
        <div className="flex flex-col p-2">
          <span className="text-xs text-[#1b1b1b]">
            Rita Harper Photography
          </span>
          <span className="text-xs text-[#1b1b1b]">
            © 2024 All Rights Reserved
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
