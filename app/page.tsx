import { Hero } from "@/components/landing/Hero";
import { SectionDivider } from "@/components/landing/SectionDivider";

export default function HomePage() {
  return (
    <div className="flex h-fit flex-col gap-2">
      <div className="mt-16">
        <Hero />

        <SectionDivider />
      </div>
    </div>
  );
}
