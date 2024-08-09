async function getJoke() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist"
    );

    const data = await response.json();
    const joke = data.joke || `${data.setup} - ${data.delivery}`;

    console.log(joke);

    const jokeElement = document.querySelector("#joke");

    // Set the text content directly
    jokeElement.textContent = joke;
  } catch (error) {
    console.error(error);
  }
}

getJoke();

// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", () => {
  const jokeBtn = document.querySelector(".btn-another");

  if (jokeBtn) {
    jokeBtn.addEventListener("click", () => {
      getJoke();
      console.log("Hello!");
    });
  }
});
