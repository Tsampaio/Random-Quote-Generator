// FSJS - Random Quote Generator


// Create the array of quote objects and name it quotes
const quotes = [
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        source: "Mark Twain",
        citation: "",
        year: "2012"
    },
    {
        quote: "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
        source: "Sara Blakely",
        citation: "Twitter",
        year: "2005"
    },
    {
        quote: "If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.",
        source: "Mark Zuckerberg",
        citation: "Facebook",
        year: "2007"
    },
    {
        quote: "I’m convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance.",
        source: "Steve Jobs",
        citation: "Apple",
        year: ""
    }
];

const arraySize = quotes.length;

const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
}

// Create the getRandomQuuote function and name it getRandomQuote

const getRandomQuote = (array) => {
    let number = randomNumber(arraySize);

    console.log("My random number is: ", number);

    return  array[number];
}

let printQuote = () => {

    let myObj = getRandomQuote(quotes);

    let stringOfQuoteProperties = 
        `<p class="quote">${myObj.quote}</p>
        <p class="source"> ${myObj.source}
            ${myObj.citation ? `<span class="citation">${myObj.citation}</span>` : ""}
            ${myObj.year ? `<span class="year">${myObj.year}</span>` : ""}
        </p>`;
    
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
    
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);