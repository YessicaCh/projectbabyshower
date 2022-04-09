const listContent = document.getElementById('listContent');


const pokemonEl = document.createElement('div');
pokemonEl.classList.add('pokemon');


const pokeInnerHTML = `
        <div class="card-img" >
            <img src="${pokemon.sprites.front_default}" alt="${name}" />
            <h3>Chupon</h3>
        </div>
    `;
pokemonEl.innerHTML = pokeInnerHTML;
listContent.appendChild(pokemonEl);
