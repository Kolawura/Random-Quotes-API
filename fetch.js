const quote = document.querySelector(".quotes");
const author = document.querySelector(".author");
const nextBtn = document.querySelector('.newQ');

nextBtn.addEventListener('click', getQuote);

addEventListener('keydown', function (e) {
    if(e.key == 'Enter'){
        getQuote(e);
    }
})

function getQuote (e){
    e.preventDefault();
    
    fetch("quote.json")
        .then(function(response){
        return response.json();
        })
        .then(function(data){
            

            randomValue = Math.floor(Math.random() * data.length)

                quote.innerText = data[randomValue].text;
                author.innerText = data[randomValue].Author.toUpperCase();
        })

    // let i = 0;
    // while (i<13) {
    //     console.log(i);
    //     i++
    // }           
        
}; 

// function shuffle(quote) {
//     let CI = quote.length, tempValue, randomValue;

//     while (CI > 0) {
//         randomValue = Math.floor(Math.random() * quote.length);
//         CI--;
//         tempValue = quote[CI];
//         quote[CI] = quote[randomValue];
//         quote[randomValue] = tempValue;
//     }
// }