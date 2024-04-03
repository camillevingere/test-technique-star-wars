import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../ui/typography";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-card">
      <div className="m-auto w-full max-w-3xl px-2 py-4">
        <div className="mb-4 flex flex-col items-center justify-center">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={SiteConfig.appIcon}
              width={40}
              height={30}
              alt="app logo"
            />
            <Typography variant="base" as={Link} href="/">
              {SiteConfig.title}
            </Typography>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SiteConfig.title}
          </Typography>
        </div>
      </div>
    </footer>
  );
};
