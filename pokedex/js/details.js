const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");

const container = document.querySelector(".container");

async function pokedex() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await response.json();
    console.log(result);

    const pokemon = {
      id: result.id,
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
    };

    let firstType = pokemon.type.split(",")[0];

    document.title = pokemon.name;
    document.querySelector(".container").innerHTML += `
      <div class="card">
          <img class="card-image ${firstType}" src="${pokemon.image}"/>
          <h2 class="card-title">${pokemon.name}</h2>
          <p class="card-subtitle">Type: ${pokemon.type}</p>
      </div>
  `;

    //console.log(pokemon.type);
  } catch (error) {
    console.log(error);
  }
}

pokedex();
