// FSJS - Random Quote Generator


// Create the array of quote objects and name it quotes
const quotes = [
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        source: "Mark Twain",
        citation: "",
        year: ""
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
let randomNumber = Math.floor(Math.random() * arraySize);

console.log("My random number is: ", randomNumber);

// Create the getRandomQuuote function and name it getRandomQuote

const getRandomQuote = (array, index) => {
    console.log(index);
    return  array[index].quote;
}

console.log(getRandomQuote(quotes, randomNumber));

// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);