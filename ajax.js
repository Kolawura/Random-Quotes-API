const quote = document.querySelector(".quotes");
const author = document.querySelector(".author");
const nextBtn = document.querySelector(".newQ");

nextBtn.addEventListener("click", getQuote);
document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    getQuote(e);
  }
});

function getQuote(e) {
  e.preventDefault();

  const http = new XMLHttpRequest();

  http.open("GET", "https://type.fit/api/quotes", true);

  http.onload = function () {
    if (this.status === 200) {
      const quotes = JSON.parse(this.responseText);

      let random = parseInt(Math.random() * quotes.length);

      quote.innerText = quotes[random].text;
      author.innerText = quotes[random].author.toUpperCase();
    }
  };
  http.send();
}
