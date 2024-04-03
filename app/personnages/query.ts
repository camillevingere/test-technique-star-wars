import type { CharacterType } from "./CharacterCard";

export const fetchCharacters = async ({ page }: { page: number }) => {
  const res = await fetch(`https://swapi.py4e.com/api/people?page=${page}`);
  const data = res.json();
  return data;
};

export const fetchCharactersSearchFilter = async ({
  page,
  search,
  filter,
}: {
  page: number;
  search: string;
  filter: { gender: string; height: string; mass: string };
}) => {
  let characters: CharacterType[] = [];

  const firstData = await fetchCharacters({ page });
  const totalPages =
    firstData.results.length === 0
      ? 0
      : Math.floor(firstData.count / firstData.results.length);

  // Fetch all characters
  for (let i = 1; i <= totalPages; i++) {
    const data = await fetchCharacters({ page: i });
    data?.results.map((character: CharacterType) => characters.push(character));
  }
  // Filter characters
  if (filter.gender || filter.height || filter.mass) {
    characters = [
      ...characters.filter((character: CharacterType) => {
        let isNotFiltered = true;
        if (
          character.gender &&
          filter.gender &&
          character.gender !== filter.gender
        ) {
          isNotFiltered = false;
        }
        if (filter.mass && character.mass !== "unknown") {
          const mass = parseInt(character.mass);
          if (filter.mass === "<50") {
            isNotFiltered = mass < 50;
          } else if (filter.mass === "50") {
            isNotFiltered = mass >= 50 && mass < 60;
          } else if (filter.mass === "60") {
            isNotFiltered = mass >= 60 && mass < 70;
          } else if (filter.mass === "70") {
            isNotFiltered = mass >= 70 && mass < 80;
          } else if (filter.mass === "80") {
            isNotFiltered = mass >= 80;
          }
        }
        if (filter.height && character.height !== "unknown") {
          const height = parseInt(character.height);
          if (filter.height === "<100") {
            isNotFiltered = height < 100;
          } else if (filter.height === "100") {
            isNotFiltered = height >= 100 && height < 120;
          } else if (filter.height === "120") {
            isNotFiltered = height >= 120 && height < 140;
          } else if (filter.height === "140") {
            isNotFiltered = height >= 140 && height < 160;
          } else if (filter.height === "160") {
            isNotFiltered = height >= 160 && height < 180;
          } else if (filter.height === "180") {
            isNotFiltered = height >= 180;
          }
        }
        return isNotFiltered;
      }),
    ];
  }

  // Research for a character
  if (search) {
    characters = [
      ...characters.filter((character: CharacterType) =>
        character.name.toLowerCase().includes(search),
      ),
    ];
  }
  return characters;
};
