// Get computed styles for the body element
const bodyStyles = window.getComputedStyle(document.body);


/***************************************** */ 
/* TOGGLE COLOR MODE: DARK | LIGHT | PRINT */
/*******************************************/

// Get computed style for color-scheme
let currentColorScheme = bodyStyles.getPropertyValue('--preferred-color-scheme');

/* SET THE APPROPRIATE LABEL FOR THE COLOR MODE BUTTON */
// Select button that toggles color mode
const colorModeButton = document.querySelector('#colorMode');
// Set label of button according to color mode
if (currentColorScheme == 'dark') {
    // Set label of color mode button to dark
    colorModeButton.textContent = 'light mode';
} else if (currentColorScheme == 'light') {
    // Set label of color mode button to light
    colorModeButton.textContent = 'print mode';
} else if (currentColorScheme == 'grayscale') {
    // Set label of color mode button to light
    colorModeButton.textContent = 'dark mode';
} else {
     // Set label of color mode button to toggle
    colorModeButton.textContent = 'toggle color mode';
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
        document.body.style.setProperty('--secondary', 'hsl(213, 50%, 95%)');
        document.body.style.setProperty('--body-bg', 'hsl(213, 20%, 97%)');
        document.body.style.setProperty('--highlight', 'hsl(35, 100%, 50%)');
        document.body.style.setProperty('--shadow', '0px 3px 5px 0px hsl(0, 0%, 67%)');

         // Set label of color mode button
        colorModeButton.textContent = 'print mode';

    } 
    /* LIGHT */
    else if (preferredColorScheme == 'light') {
        // Set color scheme to print
        document.body.style.setProperty('--preferred-color-scheme', 'grayscale');

        // root.style.setProperty('--primary', 'rgb(200, 200, 200)');
        document.body.style.setProperty('color-scheme', 'grayscale');
        document.body.style.setProperty('--primary', 'hsl(0, 0%, 0%)');
        document.body.style.setProperty('--secondary', 'hsl(0, 0%, 100%)');
        document.body.style.setProperty('--body-bg', 'hsl(0, 0%, 100%)');
        document.body.style.setProperty('--highlight', 'hsl(35, 100%, 40%)');
        document.body.style.setProperty('--shadow', 'none');

        // Set label of color mode button
        colorModeButton.textContent = 'dark mode';
    
    } 
    /* PRINT */
    else if (preferredColorScheme == 'grayscale') { 
        // Set color scheme to dark
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

