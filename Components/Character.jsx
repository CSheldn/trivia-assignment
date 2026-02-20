export default async function CharacterSection({ name, species, charImg }) {

    return (
        <div style={{ textAlign: 'center', margin: '50px'}}>
            <img style={{ display: 'block', margin: '0 auto', borderRadius: '25%' }} src={charImg}/>
            <h1 style={{ marginTop: '10px' }}>{name}</h1>
            <h1>{species}</h1>
        </div>
    );

}