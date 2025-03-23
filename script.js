// console.log(pokemonImg.src);


const getPokemon = async () => {
    try {
        const searchName = document.getElementById("searchName").value.toLowerCase();
        const pokemonImg = document.getElementById("pokemonImg");

        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}`);

        if(!pokemonData.ok){
            throw new Error("Could not find Pokemon");   
        }

        const data = await pokemonData.json();
        const pokeImage = data.sprites.front_default;

        pokemonImg.src = pokeImage;

    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchName").value = "Pikachu";
    getPokemon();
  });
  

