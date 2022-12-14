/********************/
/* HAMBURGER BUTTON */
/********************/

// Select button and nav element
const menuButton = document.querySelector("footer li.hamburger button");
const aside = document.querySelector("main aside");
const footer = document.querySelector("footer");

// Add event listener
menuButton.addEventListener("click", function(){
    //  console.log('Open menu');
     menuButton.classList.toggle("menuOpen");
    aside.classList.toggle("openNav");
    footer.classList.toggle("noTopBorder");
});


/***************************************** */ 
/* TOGGLE COLOR MODE: DARK | LIGHT | PRINT */
/*******************************************/

// Get computed styles for the body element
const bodyStyles = window.getComputedStyle(document.body);

// Get computed style for color-scheme
let currentColorScheme = bodyStyles.getPropertyValue('--preferred-color-scheme');

/* SET THE APPROPRIATE LABEL FOR THE COLOR MODE BUTTON */
// Select button that toggles color mode
const colorModeButton = document.querySelector('#colorModeButton');
// Set label of button according to color mode
if (currentColorScheme == 'dark') {
    // Set label of color mode button to dark
    colorModeButton.textContent = 'light mode';
} else if (currentColorScheme == 'light') {
    // Set label of color mode button to dark
    colorModeButton.textContent = 'dark mode';
} else {
     // Set label of color mode button to color mode
    colorModeButton.textContent = 'color mode';
}

/* ADD EVENT LISTENER TO COLOR MODE BUTTON */ 
colorModeButton.addEventListener('click', changeColorMode);

function changeColorMode() {

    // Get computed style for color-scheme
    let preferredColorScheme = bodyStyles.getPropertyValue('--preferred-color-scheme');    

    /* DARK */
    if (preferredColorScheme == 'dark') { 
        // Set color scheme to light
        document.body.style.setProperty('--preferred-color-scheme', 'light');

        // root.style.setProperty('--primary', 'rgb(200, 200, 200)');
        document.body.style.setProperty('color-scheme', 'light');
        document.body.style.setProperty('--primary', 'hsl(213, 100%, 15%)');
        document.body.style.setProperty('--secondary', 'hsl(213, 50%, 93%)');
        document.body.style.setProperty('--body-bg', 'hsl(213, 20%, 97%)');
        document.body.style.setProperty('--highlight', 'hsl(35, 100%, 50%)');
        document.body.style.setProperty('--shadow', '0px 3px 5px 0px hsl(0, 0%, 67%)');

         // Set label of color mode button
        colorModeButton.textContent = 'dark mode';

    } 
    /* LIGHT */
    else if (preferredColorScheme == 'light') {
        // Set color scheme to print
        document.body.style.setProperty('--preferred-color-scheme', 'dark');

        // root.style.setProperty('--primary', 'rgb(200, 200, 200)');
        document.body.style.setProperty('color-scheme', 'dark');
        document.body.style.setProperty('--primary', 'hsl(213, 100%, 92%)');
        document.body.style.setProperty('--secondary', 'hsl(213, 50%, 10%)');
        document.body.style.setProperty('--body-bg', 'hsl(213, 50%, 15%)');
        document.body.style.setProperty('--highlight', 'hsl(35, 100%, 50%)');
        document.body.style.setProperty('--shadow', '0px 3px 5px 0px hsl(0, 0%, 5%)');

        // Set label of color mode button
        colorModeButton.textContent = 'light mode';
    
    } 
    else {
        console.log("Neither.");
    }

}

