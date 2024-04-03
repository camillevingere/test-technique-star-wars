"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "next/navigation";

export type CoursePaginationButtonProps = {
  totalCharacters: number;
  id: number;
};

export const CharacterPaginationButton = (
  props: CoursePaginationButtonProps,
) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        disabled={props.id === 1}
        onClick={() =>
          router.push(
            `/personnages/${props.id - 1}?count=${props.totalCharacters}`,
          )
        }
      >
        Personnage précédent
      </Button>
      <Typography>
        {props.id}/{props.totalCharacters}
      </Typography>
      <Button
        variant="outline"
        size="sm"
        disabled={props.id === props.totalCharacters + 1}
        onClick={() =>
          router.push(
            `/personnages/${props.id + 1}?count=${props.totalCharacters}`,
          )
        }
      >
        Personnage suivant
      </Button>
    </div>
  );
};
