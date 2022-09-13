// const number = Math.floor(Math.random() * 21);
let number = prompt();

//Element references
const form = document.getElementById('guess-form');
const results = document.getElementById('results')

// Event Listeners
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let guess = document.getElementById('guess').value;
    if (number == guess) {
     results.innerHTML = "You guessed it!"
    }
    if (number > guess) {
        console.log('greater than')
     results.innerHTML = "The number is bigger than your guess."
    }
    if (number < guess) {
     results.innerHTML = "The number is lower than your guess."
    }
})

// const testPrompt = () => {
//     const newNumber = 0;
//     do {
//         const number = prompt("enter a number greater than 0");
//         newNumber = number;
//     } while (number <= 0);
//     console.log(number)
// }
