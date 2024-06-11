import  "./MyComponent.css"
import PropTypes from "prop-types";




function PokemonCard({pokemon}) {
    
    console.log(pokemon);
    return (
        <div className="box1">
    <figure className="card">       
        {
            pokemon.imgSrc?
            <img src={ pokemon.imgSrc } alt={pokemon.name} className="cardImg" />
            : <p>"???"</p>
        }
        <figcaption>{pokemon.name}</figcaption>     
    </figure>
    </div>   
)}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isResquired,
    imgSrc: PropTypes.string,
    
    }).isResquired
};

export default PokemonCard