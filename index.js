const PokedexData = [
  {
    name: "bulbasaur",
    height: 7,
    weight: 69,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    height: 6,
    weight: 85,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "pikachu",
    height: 4,
    weight: 60,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mewtwo",
    height: 20,
    weight: 1220,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "magikarp",
    height: 9,
    weight: 100,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    name: "jigglypuff",
    height: 5,
    weight: 55,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "squirtle",
    height: 5,
    weight: 90,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "jolteon",
    height: 8,
    weight: 245,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    name: "electabuzz",
    height: 11,
    weight: 300,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    name: "moltres",
    height: 20,
    weight: 600,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    name: "growlithe",
    height: 7,
    weight: 190,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    name: "oddish",
    height: 5,
    weight: 54,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    name: "rattata",
    height: 3,
    weight: 35,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    name: "hypno",
    height: 16,
    weight: 756,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
];

let showPokemon = document.querySelector("#showPokemon");
let showBtn = document.querySelector("#showBtn");

showBtn.addEventListener("click", () => {
  PokedexData.forEach((aPokemon) => {
    let pokemonImag = document.createElement('img');
    let aPokemonList = document.createElement("li");
    aPokemonList.innerText = `
      name: ${aPokemon.name},
      height: ${aPokemon.name},
      weight: ${aPokemon.weight},
      type: ${aPokemon.type},
      url: ${aPokemon.url}
    `;
    pokemonImag.src = aPokemon.url 
    showPokemon.append(aPokemonList)
    aPokemonList.append(pokemonImag);
  });
});

let filterBtn = document.querySelector("#filterBtn");
filterBtn.addEventListener("click", () => {
  showPokemon.innerHTML = "";
  let checkedType = document.querySelectorAll("[name='pokemonType']:checked");
  let selectedType = [];
  checkedType.forEach((type) => {
    selectedType.push(type.value);
  });

  let filterPokemon = PokedexData.filter((items) => {
    return selectedType.includes(items.type);
  });
  filterPokemon.forEach((aPokemon) => {
    let aPokemonList = document.createElement("li");
    aPokemonList.innerText = `
      name: ${aPokemon.name},
      height: ${aPokemon.name},
      weight: ${aPokemon.weight},
      type: ${aPokemon.type},
      url: ${aPokemon.url}
    `;
    showPokemon.append(aPokemonList);
  });
});

let registBtn = document.querySelector('#registBtn');
let pokemonName = document.querySelector('#name');
let pokemonHeight = document.querySelector('#height');
let pokemonWeight = document.querySelector('#weight');
let pokemonType = document.querySelector('#type');
let pokemonUrl = document.querySelector('#url');

registBtn.addEventListener('click', () => {
    PokedexData.push({
        name: `${pokemonName.value}`,
        height: NumberpokemonHeight.value,
        weight: +pokemonWeight.value,
        type: `${pokemonType.value}`,
        url: `${pokemonUrl.value}`,
    })
console.log(PokedexData);
})
    