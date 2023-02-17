const container = document.querySelector(".container");
let loader = document.querySelector(".loader img");

async function pokedex() {
  for (let i = 1; i <= 150; i++) {
    try {
      loader.classList.add("show");
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const result = await response.json();
      console.log(result);

      loader.classList.remove("show");

      const pokemon = {
        id: result.id,
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
      };
      document.querySelector(".container").innerHTML += `
      <a href="pages/details.html?id=${pokemon.id}" class="card">
          <img class="card-image" src="${pokemon.image}"/>
          <h2 class="card-title">${pokemon.name}</h2>
          <p class="card-subtitle">Type: ${pokemon.type}</p>
         
          
      </a>
  `;

      //let typeName = result.types.name;

      //typeCard = document.querySelector(".card");

      //typeColor(pokemon.type);

      console.log(pokemon.type);
    } catch (error) {
      console.log(error);
    }
  }
}

pokedex();
/*
let typeCard;

function typeColor(type) {
  if (type == "bug") {
    typeCard.classList.add(".lilla");
  }
}
*/
