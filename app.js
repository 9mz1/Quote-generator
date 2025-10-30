quoteText = document.querySelector("#quoteText");
quoteBtn = document.querySelector("button");

url = "https://api.kanye.rest/"

function fetchQuote() {
    fetch(url)
    .then(response => response.json())
    .then((json) => displayQuote(json.quote))
    .catch((error) => console.error(error));
};


function displayQuote(quote){
    quoteText.innerText = `"${quote}"`;
};

quoteBtn.addEventListener("click", fetchQuote);
window.addEventListener("load", fetchQuote);
