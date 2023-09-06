import pokemonCardTpl from '../../templates/pokemon-card.hbs';
const refs = { cardContainer: document.querySelector('.js-card-container') };

fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(response => {
    return response.json();
}).then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;
}).catch(error => {
    console.log(error);
})