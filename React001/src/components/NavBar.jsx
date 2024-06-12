

function NavBar ({pokemonIndex,handleNextClick,handlePreviousClick,pokemonList}) {

    return (

        <div className='button'>
        {pokemonIndex > 0 && (
          <button onClick={handlePreviousClick}>Précédent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleNextClick}>Suivant</button>
        )}
      </div>
    )    
}


export default NavBar