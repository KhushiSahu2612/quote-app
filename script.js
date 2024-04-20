const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world", +quote.innerHTML,
    "----- by "+ author.innerHTML,"Tweet window", "width=600,height=300");
}
