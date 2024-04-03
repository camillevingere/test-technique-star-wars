import { CircleSvg } from "@/components/svg/CircleSvg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { Typography } from "../../components/ui/typography";
import { ReviewSmall } from "./review/ReviewSmall";

export const Hero = () => {
  return (
    <div>
      <div className="m-auto px-4">
        <main className="relative flex min-h-[700px] items-center gap-4 px-8 pt-16 max-lg:flex-col lg:pt-0">
          <div className="relative flex flex-1 flex-col items-start justify-center gap-4 lg:gap-6 xl:gap-8">
            <Typography variant="h1" className="!leading-tight">
              Découvre les personnages <br />
              <span className="inline-block -rotate-2 bg-foreground text-background">
                de{" "}
                <span className="relative inline-block">
                  <span>STAR WARS</span>
                  <CircleSvg className="fill-primary" />
                </span>
              </span>
            </Typography>
            <Typography variant="large">
              Une liste avec des filtres pour en apprendre plus sur tes
              personnages préférés
            </Typography>

            <Link
              href="/personnages"
              className={cn(buttonVariants({ size: "lg", variant: "default" }))}
            >
              <Rocket size={20} className="mr-2" /> Rejoins maintenant
            </Link>

            <ReviewSmall
              stars={5}
              avatars={[
                "https://i.pravatar.cc/300?u=6",
                "https://i.pravatar.cc/300?u=7",
                "https://i.pravatar.cc/300?u=8",
                "https://i.pravatar.cc/300?u=9",
                "https://i.pravatar.cc/300?u=10",
              ]}
            >
              1000+ utilisateurs utilisent la plateforme
            </ReviewSmall>
          </div>
          <div className="flex flex-1 justify-center">
            <img
              src="/images/hero.png"
              className="max-w-sm object-contain max-md:max-w-[200px]"
              alt="Hero images"
            />
          </div>
        </main>
      </div>
    </div>
  );
};
