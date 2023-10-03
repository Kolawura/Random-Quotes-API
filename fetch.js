const quote = document.querySelector(".quotes");
const author = document.querySelector(".author");
const nextBtn = document.querySelector(".newQ");

nextBtn.addEventListener("click", getQuote);

addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    getQuote(e);
  }
});


function getQuote(e) {
  e.preventDefault();

  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      randomValue = Math.floor(Math.random() * data.length);
     
      quote.innerText = data[randomValue].text;
      let authors = data[randomValue].author;
      let authorName = authors.split(",")
      if(authorName.length ===1 && authorName[0] === 'type.fit'){
        author.innerText = 'ANONYMOUS';
      }else {
        author.innerText = authorName[0].toLocaleUpperCase();
      }
      
    })
    .catch((error) => console.error("Error fetching data: ", error));
}
