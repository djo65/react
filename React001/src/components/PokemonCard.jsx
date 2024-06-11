import  "./MyComponent.css"





function PokemonCard({pokemon}) {
    return (
    <figure className="card">       
        {
            pokemon.imgSrc?
            <img src={ pokemon.imgSrc }
            alt="{pokemon.name}"
            className="cardImg" />
            : <p>"???"</p>
        }
        <figcaption>{pokemon.name}</figcaption>     
    </figure>
    
)}



export default PokemonCard