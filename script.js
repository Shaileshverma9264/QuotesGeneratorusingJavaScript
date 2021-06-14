const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
let jsonData = "";
let quotesData = "";

//THIRD STEP
const tweetNow = () => {
    let tweet = `https://twitter.com/intent/tweet?text=${quotesData.text} -(author)${quotesData.author}`;
    window.open(tweet);
};
//  SECOND STEP

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 16);
    quotesData = jsonData[rnum];
    quotes.innerText = `${quotesData.text}`
    quotesData.author == null
        ? author.innerText = "unknown"
        : author.innerText = `${quotesData.author}`
};


//    FIRST STEP
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        jsonData = await data.json();
        // console.log(jsonData[10].text);
        // console.log(jsonData[10].author);

        getNewQuotes();

    } catch (error) {

    }
};
newQ.addEventListener("click", getNewQuotes);
tweetMe.addEventListener("click", tweetNow);
getQuotes();