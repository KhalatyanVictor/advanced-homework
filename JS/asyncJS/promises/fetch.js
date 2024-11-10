async function fetchData() {
  const pokemonName = document
    .getElementById("pokemonName")
    .value.toLowerCase();
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    console.log(response);

    if (!response.ok) {
      const errorText = document.getElementById("errorText");
      errorText.textContent = "Can not find this character";
      errorText.style.display = "block";
      throw new Error("Can not fetch this API");
    }

    const data = await response.json();

    const pokemonSprite = data.sprites.front_default;
    const imageElement = document.getElementById("imageSprite");

    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";
  } catch (error) {
    throw new Error(error);
  }
}
