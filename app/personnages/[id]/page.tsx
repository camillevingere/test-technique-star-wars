import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { env } from "@/lib/env";
import { extractIdFromUrl, getCharacterColor } from "@/lib/utils";
import { Characteristics } from "./Characteristics";
import { CharacterPaginationButton } from "./CharacterPaginationButton";
import Film from "./Film";

const fetchCharacter = async (id: number) => {
  const res = await fetch(`${env.API_URL}/people/${id}`);
  const data = res.json();
  return data;
};

export default async function CharacterPage({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { id: string };
}) {
  const id = parseInt(params.id);
  const totalCharacters = parseInt(searchParams.count as string);
  const data = await fetchCharacter(id);
  const color = getCharacterColor(data.gender);

  const created = new Date(data.created);
  const edited = new Date(data.edited);

  return (
    <div>
      <div>
        <Card
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={`${color} mx-4 h-[200px] border-0 md:h-[300px]`}
        />
        <div className="mt-[-150px] flex flex-col">
          <Card>
            <CardContent>
              <div className="h-min-[150px]">
                <Characteristics data={data} />
              </div>
            </CardContent>
          </Card>
          <div className="mt-[-485px] flex flex-col items-center md:mt-[-250px]">
            <div className="flex-1">
              <Avatar className="size-[100px] border md:size-[150px]">
                <AvatarFallback>{data.name}</AvatarFallback>
                {data.image ? <AvatarImage src={data.image} /> : null}
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      <Layout className="mt-[415px] md:mt-[150px]">
        <LayoutHeader>
          <LayoutTitle>Films</LayoutTitle>
        </LayoutHeader>
        <LayoutContent className="flex flex-col gap-8">
          <div className="mb-8 grid grid-cols-3 gap-4">
            {data.films.map((film: string) => {
              return <Film key={film} id={extractIdFromUrl(film)} />;
            })}
          </div>
          <Typography variant="small">
            Date de création : {created.toLocaleDateString("fr")}
          </Typography>
          <Typography variant="small">
            Date de dernière modification : {edited.toLocaleDateString("fr")}
          </Typography>
          <CharacterPaginationButton
            id={id}
            totalCharacters={totalCharacters}
          />
        </LayoutContent>
      </Layout>
    </div>
  );
}
