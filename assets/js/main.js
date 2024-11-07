

//const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton  = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0


function loadPokemonItens(offset, limit) {
     
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        //const formattedOrder = String(pokemon.number).padStart(3, '0'); depois tentar incrementar esse padrao no pokemon.number
        const newHtml = pokemons.map((pokemon) =>
             `
                <li class="pokemon ${pokemon.type}">
                            <span class="number">#${pokemon.number}</span>
                            <span class="name">${pokemon.name}</span>
                            <div class="detail">
                                <ol class="types">
                                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                                </ol>
            
                                <img src="${pokemon.photo}"
                                alt="${pokemon.name}">
                            </div>                
                            
                        </li>       
                `).join('')
                pokemonList.innerHTML += newHtml

    })
}
   
loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsNextPage = offset + limit

    if (qtdRecordsNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset,limit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset,limit)
    }
    
})


// function convertPokemonTypesToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }



// function convertPokemonToLi(pokemon) {
    
//     const formattedOrder = String(pokemon.number).padStart(3, '0');

//     return 


    // const listItems = []

    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon))        
    // }







