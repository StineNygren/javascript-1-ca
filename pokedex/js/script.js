const container = document.querySelector(".container");
let loader = document.querySelector(".loader img");

document.title = "Pokedex";

async function pokedex() {
  for (let i = 1; i <= 151; i++) {
    try {
      loader.classList.add("show");
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const result = await response.json();

      loader.classList.remove("show");

      const pokemon = {
        id: result.id,
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
      };
      let firstType = pokemon.type.split(",")[0];

      document.querySelector(".container").innerHTML += `
      <a href="pages/details.html?id=${pokemon.id}" class="card ">
          <img class="card-image ${firstType}" src="${pokemon.image}"/>
          <h2 class="card-title">${pokemon.name}</h2>
          <p class="card-subtitle ">Type: ${pokemon.type}</p>
         
          
      </a>
  `;
    } catch (error) {
      console.log(error);
    }
  }
}

pokedex();
