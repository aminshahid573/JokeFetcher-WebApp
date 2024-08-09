const containerDiv = document.querySelector(".container");

async function fetchAndDisplayUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const { results } = await response.json();
    const { gender, name: { first, last }, picture: { large: imageUrl } } = results[0];

    const divElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const nameElement = document.createElement("h2");
    const genderElement = document.createElement("h3");

    imageElement.classList.add("image");
    imageElement.src = imageUrl;
    nameElement.textContent = `${first} ${last}`;
    genderElement.textContent = gender;
    genderElement.classList.add("gender");

    divElement.append(nameElement, genderElement);
    containerDiv.append(imageElement, divElement);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchAndDisplayUser();
