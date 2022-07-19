const displayContainer = document.querySelector('.displayContainer');
const button = document.querySelector('.btn');
const quotesContainer = document.querySelector('#quotesContainer');
const authorQuotes = document.querySelector('.personAuthor');
//fetch an API and return back in object

const randomQuotesButton = ()=>{
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result)
        quotesContainer.innerText = result.content;
        authorQuotes.innerText = result.author;  
    })
}

button.addEventListener('click', randomQuotesButton);



