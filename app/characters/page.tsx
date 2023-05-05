import Link from "next/link";

interface CharactersApi {
  results: CharacterResults[];
}

interface CharacterResults {
  id: number;
  name: string;
  image: string;
}

async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}

export default async function CharacterPage() {
  const data: CharactersApi = await getData();
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {data.results.map((char) => (
        <li key={char.id}>
          <Link href={`/characters/${char.id}`}>
            <div>
              <img className="w-full" src={char.image} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{char.name}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
