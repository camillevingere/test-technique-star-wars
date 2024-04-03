import { CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import type { CharacterType } from "../CharacterCard";

export const Characteristics = ({
  data: character,
}: {
  data: CharacterType;
}) => {
  return (
    <div className="flex">
      <div className="mt-4 flex flex-[2] flex-col items-start gap-4 md:flex-row">
        <div className="flex w-full flex-1 flex-col items-center border-b-[1px] md:border-b-0 md:border-r-[1px]">
          <Typography variant="p" className="my-2 text-gray-500">
            Genre
          </Typography>

          <CardContent className="mt-4">
            <Typography variant="h3">{character.gender}</Typography>
          </CardContent>
        </div>
        <div className="flex w-full flex-1 flex-col items-center border-b-[1px] md:border-b-0 md:border-r-[1px]">
          <Typography variant="p" className="my-2 text-gray-500">
            Taille
          </Typography>

          <CardContent className="mt-4">
            <Typography variant="h3">{character.height} cm</Typography>
          </CardContent>
        </div>
        <div className="flex w-full flex-1 flex-col items-center">
          <Typography variant="p" className="my-2 text-gray-500">
            Poids
          </Typography>

          <CardContent className="mt-4">
            <Typography variant="h3">{character.mass} kg</Typography>
          </CardContent>
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="mt-4 flex flex-[2] flex-col items-start gap-4 md:flex-row">
        <div className="flex w-full flex-1 flex-col items-center border-b-[1px] md:border-b-0 md:border-r-[1px]">
          <Typography variant="p" className="my-2 text-gray-500">
            Cheveux
          </Typography>

          <CardContent className="mt-4">
            <Typography variant="h3">{character.hair_color}</Typography>
          </CardContent>
        </div>
        <div className="flex w-full flex-1 flex-col items-center border-b-[1px] md:border-b-0 md:border-r-[1px]">
          <Typography variant="p" className="my-2 text-gray-500">
            Peau
          </Typography>

          <CardContent className="mt-4">
            <Typography variant="h3">{character.skin_color}</Typography>
          </CardContent>
        </div>
        <div className="flex w-full flex-1 flex-col items-center">
          <Typography variant="p" className="my-2 text-gray-500">
            Yeux
          </Typography>

          <CardContent className="mt-4">
            <Typography variant="h3">{character.eye_color}</Typography>
          </CardContent>
        </div>
      </div>
    </div>
  );
};
