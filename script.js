// Because we included this file in the head section of the webpage and not at the bottom of the body tag, we need to make sure the page is fully rendered before executing any code that references elements on our HTML page

// window.onload = () => {
//     const rootElement = document.getElementById("root")
//     rootElement.innerHTML = "Hello from my first SPA App"
// }

// Ensure the page is fully rendered before executing any code references elements on the HTML page
// Code the onloader event which is window.onload
// Create a variable rootElement and assign it by calling the document method getElementById passing it as the first parameter, the id of the div in the HTML page
// Use the new variable to assign the innerHTML to some text which will replace what's inside the div tag in the HTML page

window.onload = () => {
    const rootElement = document.getElementById("root")
    const button = document.createElement("button")
    button.innerHTML = "Click me for current date";
    button.addEventListener("click", ()=> {
        button.innerHTML = new Date().toString()
    })
    rootElement.appendChild(button)
}

// Ensure the page is fully rendered before executing any code references elements on the HTML page
// Code the onloader event which is window.onload
// Create a new variable button using document.createElement to create it
// Set the inner HTML of the button to a specified message
// Assign a click event to the button by calling addEventListener and give it an anonymous function to execute.
// Set the inner HTML to the current datetime
// To our root element, call appendChild with the newly defined variable