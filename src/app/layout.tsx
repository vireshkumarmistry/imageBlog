import dynamic from "next/dynamic";
import { CMS_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import cn from "classnames";

import "./globals.css";
import HeaderSkeleton from "@/components/common/skeleton/header-skeleton";
import NavbarSkeleton from "@/components/common/skeleton/navbar-skeleton";

const Nav = dynamic(() => import("@/components/common/navbar"), {
  ssr: false,
  loading: () => <NavbarSkeleton />,
});
const Footer = dynamic(() => import("@/components/common/footer"), {
  ssr: false,
});
const RootHeader = dynamic(() => import("@/components/common/header/root-header"), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

const ptSerif = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          ptSerif.className,
          "dark:bg-slate-900 dark:text-slate-400"
        )}
      >
        <div className="flex items-start bg-[#C4D7FF] p-4 overflow-hidden">
          <Nav />
          <div className="w-[calc(100%-240px)] h-[calc(100svh-32px)] flex flex-1 flex-col lg:p-4 items-center justify-between">
            <RootHeader />
            <div className="overflow-auto w-full h-full">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
