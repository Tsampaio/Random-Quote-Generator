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
    },
    {
        quote: "Veni Vidi Veci, I came, I saw, I conquered",
        source: "Cesar",
        citation: "",
        year: "800AD"
    }
];

//getting the size of the quotes array
const arraySize = quotes.length;

//setting the arrays for the Background Colours
const bgColour = ["royalblue", "red", "violet", "brown", "grey", "darkblue"];
//getting the size of the bgColour array
const bgColourSize = bgColour.length;

//generating a random number with a limit number based on the size of the array. using Math.floor to round down numbers and get access to number 0 inclusive
const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
}

// Create the getRandomQuote function and name it getRandomQuote, passing the array and size as parameters
//so we can actually get a random quote and a random background image with the same function
const getRandomQuote = (array, size) => {
    
    let number = randomNumber(size);

    return  array[number];
}

//Printing the generated quotes to the screen
let printQuote = () => {

    let myObj = getRandomQuote(quotes, arraySize);
    
    let stringOfQuoteProperties = 
        `<p class="quote">${myObj.quote}</p>
        <p class="source"> ${myObj.source}
            ${myObj.citation ? `<span class="citation">${myObj.citation}</span>` : ""}
            ${myObj.year ? `<span class="year">${myObj.year}</span>` : ""}
        </p>`;
    
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;

    bgGenerator();
    
}

//generating a random background colour and applying it to body
let bgGenerator = () => {
    let myColour = getRandomQuote(bgColour, bgColourSize);
    document.body.style.backgroundColor = myColour;
}

//every 20s the quote will change automatically and the background colour as well
let myTimer = setInterval(printQuote, 20000);




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);