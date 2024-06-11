import  "./MyComponent.css"





function PokemonCard({pokemon}) {
    
    console.log(pokemon);
    return (
    <figure className="card">       
        {
            pokemon.imgSrc?
            <img src={ pokemon.imgSrc } alt="" className="cardImg" />
            : <p>"???"</p>
        }
        <figcaption>Bulbasaur</figcaption>     
    </figure>
    
)}

export default PokemonCard