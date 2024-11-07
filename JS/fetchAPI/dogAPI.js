document
  .getElementById("dogBreedSelect")
  .addEventListener("change", function () {
    const selectedBreed = this.value;

    if (selectedBreed) {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
        .then((response) => response.json())
        .then((data) => {
          const imageData = data.message;
          const container = document.getElementById("dogImagesContainer");
          container.innerHTML = "";
          imageData.forEach((imageUrl) => {
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.alt = `${selectedBreed} dog image`;

            container.appendChild(imgElement);
          });
        })
        .catch((error) => console.error("Error fetching images:", error));
    }
  });
