import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import {
  extractIdFromUrl,
  getCharacterColor,
  getGenderTranslation,
} from "@/lib/utils";
import Link from "next/link";

export type CharacterType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

type characterCardProps = {
  data: CharacterType;
  count: number;
};

export const CharacterCard = ({ data, count }: characterCardProps) => {
  const id = extractIdFromUrl(data.url);

  const color = getCharacterColor(data.gender);

  return (
    <Link
      href={`/personnages/${id}?count=${count}`}
      className="transition-all ease-out hover:translate-y-[-5px]"
    >
      <Card className="flex flex-col gap-4">
        <CardHeader className="flex flex-row items-center gap-3 space-y-0">
          <CardTitle>{data.name}</CardTitle>
          <Avatar className="size-14">
            <AvatarFallback className={`${color}`}>
              {data.name.charAt(0) + data.name.charAt(data.name.length - 1)}
            </AvatarFallback>
            {data.url ? <AvatarImage src={data.url} /> : null}
          </Avatar>
        </CardHeader>
        <CardContent>
          <Typography>Genre : {getGenderTranslation(data.gender)}</Typography>
          <Typography>Date de naissance : {data.birth_year}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
