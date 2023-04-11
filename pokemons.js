const pokemonSelection = document.getElementById("poke-Selection");
const pokemonDetail = document.getElementById("poke-Detail");

class PokemonSelector {
  constructor(selectElement, detailElement) {
    this.selectElement = selectElement;
    this.detailElement = detailElement;
    this.pokemonList = [];
    this.selectedPokemon = null;
    this.fetchPokemonList();
    this.selectElement.addEventListener(
      "change",
      this.handleSelectChange.bind(this)
    );
  }

  async fetchPokemonList() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const { results } = await response.json();
    this.pokemonList = results;
    this.populateSelectElement();
  }

  populateSelectElement() {
    this.pokemonList.forEach((pokemon) => {
      const option = document.createElement("option");
      option.value = pokemon.name;
      option.textContent =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      this.selectElement.appendChild(option);
    });
  }

  async fetchPokemonDetail(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  }

  async handleSelectChange() {
    this.selectedPokemon = this.selectElement.value;
    const pokemonDetailData = await this.fetchPokemonDetail(
      this.selectedPokemon
    );
    this.populateDetailElement(pokemonDetailData);
  }

  populateDetailElement(pokemon) {
    const { name, sprites, height, weight, abilities, stats } = pokemon;
    this.detailElement.innerHTML = `
        <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <img src="${sprites.front_default}" alt="${name}">
        <p>Altura: ${height / 10} m</p>
        <p>Peso: ${weight / 10} kg</p>
        <p>Habilidades: ${abilities
          .map(({ ability }) => ability.name)
          .join(", ")}</p>
        <ul>Stats:
          ${stats
            .map(({ stat, base_stat }) => `<li>${stat.name}: ${base_stat}</li>`)
            .join("")}
        </ul>`;
  }
}

new PokemonSelector(pokemonSelection, pokemonDetail);
