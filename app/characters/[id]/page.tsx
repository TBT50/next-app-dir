import Link from "next/link";
import { Suspense } from "react";

interface CharacterData {
  id: number;
  name: string;
  image: string;
}

async function getCharacter(id: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}

export default async function SingleCharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const character: CharacterData = await getCharacter(params.id);
  const { name, image } = character;
  return (
    <>
      <Link href="/characters">Go back</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>{name}</h1>
        <div>
          <img src={image} alt="" />
        </div>
      </Suspense>
    </>
  );
}
