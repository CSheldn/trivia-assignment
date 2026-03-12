import CharacterSection from "@/Components/Character";

export default async function CharacterDetail( props ) {

    const {id} = await props.params;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

    const charInfo = await res.json();

    return (
        <CharacterSection
            name={charInfo.name}
            species={charInfo.species}
            charImg={charInfo.image}
            
        />
    );
}

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
