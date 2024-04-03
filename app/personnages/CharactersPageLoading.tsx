"use client";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";
import { CharacterCardSkeleton } from "./CharacterCardSkeleton";

export default function CharactersPageLoading() {
  return (
    <Layout className="mt-0 flex">
      <LayoutHeader className="flex-1 items-center">
        <Image
          src={SiteConfig.appIcon}
          width={400}
          height={300}
          alt="app logo"
        />
        <LayoutTitle>Personnages</LayoutTitle>
        <Input type="search" placeholder="Rechercher un personnage..." />
        <div className="mt-4 flex flex-row gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genre</SelectLabel>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="hermaphrodite">Hermaphrodite</SelectItem>
                <SelectItem value="n/a">n/a</SelectItem>
                <SelectItem value="none">none</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Poids" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Poids</SelectLabel>
                <SelectItem value="<50">{"< 50"}</SelectItem>
                <SelectItem value="50">{">= 50 et < 60"}</SelectItem>
                <SelectItem value="60">{">= 60 et < 70"}</SelectItem>
                <SelectItem value="70">{">= 70 et < 80"}</SelectItem>
                <SelectItem value="80">{">= 80"}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Taille" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Taille</SelectLabel>
                <SelectItem value="<100">{"< 100"}</SelectItem>
                <SelectItem value="100">{">= 100 et < 120"}</SelectItem>
                <SelectItem value="120">{">= 120 et < 140"}</SelectItem>
                <SelectItem value="140">{">= 140 et < 160"}</SelectItem>
                <SelectItem value="160">{">= 160 et < 180"}</SelectItem>
                <SelectItem value="180">{">= 180"}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </LayoutHeader>
      <LayoutContent className="mt-8 flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <CharacterCardSkeleton key={i} />
          ))}
        </div>
      </LayoutContent>
    </Layout>
  );
}
