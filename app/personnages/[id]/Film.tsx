import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { env } from "@/lib/env";

export type FilmType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

const fetchFilm = async (id: number) => {
  const res = await fetch(`${env.API_URL}/films/${id}`);
  const data = res.json();
  return data;
};

export default async function Film({ id }: { id: number | null }) {
  if (id === null) {
    throw new Error("Invalid id");
  }

  const filmData = await fetchFilm(id);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{filmData.title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
