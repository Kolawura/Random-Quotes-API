const quote = document.querySelector(".quotes");
const author = document.querySelector(".author");
const nextBtn = document.querySelector(".newQ");

nextBtn.addEventListener("click", getQuote);

addEventListener("keydown",(e) => {
  if (e.key == "Enter") {
    getQuote(e);
  }
});

function getQuote(e) {
  e.preventDefault();

  fetch("https://type.fit/api/quotes")
    .then((response) => {
      response.json();
    })
    .then((data) => {
      randomValue = Math.floor(Math.random() * data.length);

      quote.innerText = data[randomValue].text;
      author.innerText = data[randomValue].Author.toUpperCase();
    });
}
