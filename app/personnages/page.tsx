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
import { Typography } from "@/components/ui/typography";

import { useDebounce } from "@/lib/hooks";
import { SiteConfig } from "@/lib/site-config";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import type { CharacterType } from "./CharacterCard";
import { CharacterCard } from "./CharacterCard";
import CharactersPageLoading from "./CharactersPageLoading";
import { PaginationButton } from "./PaginationButton";
import { fetchCharactersSearchFilter } from "./query";

const CHARACTERPERPAGE = 9;

export default function CharactersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [searchValue, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [mass, setMass] = useState("");
  const [height, setHeight] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  const page = Number(searchParams.page ?? 1);

  const { data, refetch, isLoading } = useQuery({
    queryFn: async () =>
      await fetchCharactersSearchFilter({
        page: page,
        search: debouncedValue,
        filter: { gender, mass, height },
      }),
    queryKey: ["characters"],
  });

  useEffect(() => {
    refetch();
  }, [debouncedValue, page, gender, mass, height]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  if (isLoading) {
    return <CharactersPageLoading />;
  }

  if (!data) {
    return (
      <Layout className="mt-0 flex items-center justify-center">
        <Typography>Pas de personnages</Typography>
      </Layout>
    );
  }

  const totalPages =
    data.length === 0 ? 0 : Math.floor(data.length / CHARACTERPERPAGE);

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
        <Input
          type="search"
          placeholder="Rechercher un personnage..."
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <div className="mt-4 flex flex-row gap-4">
          <Select
            value={gender}
            onValueChange={(value: string) => setGender(value)}
          >
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
          <Select
            value={mass}
            onValueChange={(value: string) => setMass(value)}
          >
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
          <Select
            value={height}
            onValueChange={(value: string) => setHeight(value)}
          >
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((character: CharacterType) => (
            <CharacterCard
              key={character.name}
              data={character}
              count={data.length}
            />
          ))}
        </div>
        <PaginationButton
          baseUrl={`/personnages`}
          page={page}
          totalPages={totalPages}
        />
      </LayoutContent>
    </Layout>
  );
}
