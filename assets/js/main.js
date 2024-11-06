
const offset = 0
const limit = 10
const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton  = document.getElementById('loadMoreButton')

// function convertPokemonTypesToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

function convertPokemonToLi(pokemon) {
    
    const formattedOrder = String(pokemon.number).padStart(3, '0');

    return `
     <li class="pokemon ${pokemon.type}">
                <span class="number">#${formattedOrder}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
                </div>                
                
            </li>       
    `
    
} 



    pokeApi.getPokemons().then((pokemons = []) => {

        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml

    })



    // const listItems = []

    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon))        
    // }







