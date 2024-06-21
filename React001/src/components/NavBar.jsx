import React from "react"

function NavBar ({pokemonList,setPokemonIndex}) {
    return (
        <div className='button'>
        {pokemonList.map((pokemon, index) =>(
            <div key={index} >
           <button onClick={() => setPokemonIndex(index)}>
            {pokemon.name} 
           </button> 
           </div>          
        ))} 
        </div>
    )    
}


export default NavBar