import Link from "next/link";

export default async function charPage() {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    
    if (!res.ok) {
        throw new Error("Falied to fetch data")
    }

    const resJSON = await res.json();
    const characters = resJSON.results;

    return (
        <ul>
            {characters.map((char) => (
                <li key={char.id}>
                    <Link href={`/characters/${char.id}`}>{char.name}</Link>
                </li>
            ))}
        </ul>
    )
}
