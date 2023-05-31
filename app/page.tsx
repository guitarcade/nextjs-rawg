import Image from "next/image";

type Game = {
  id: number;
  background_image: string;
  rating: number;
  name: string;
};

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(`${process.env.RAWG_API_URL}`);
  if (!res.ok) {
    throw new Error("failed to fetch from rawg");
  }
  const data = await res.json();
  return data.results;
};

export default async function Home() {
  const games = await getGames();
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
      {games.map((g) => {
        return (
          <div key={g.id} className="flex flex-col justify-between gap-2">
            <div className="aspect-video relative">
              <Image
                src={g.background_image}
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold">{g.name}</p>
              <p className="text-gray-400 text-sm">Rating: {g.rating}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
