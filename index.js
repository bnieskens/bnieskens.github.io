// Source: https://css-tricks.com/updating-a-css-variable-with-javascript/
const root = document.documentElement;
const darkModeButton = document.querySelector('#dark-mode');
const lightModeButton = document.querySelector('#light-mode');

// const colorScheme = root.style.getPropertyValue('color-scheme');
// console.log("Color scheme: ", colorScheme);

darkModeButton.addEventListener('click', setDarkMode);

function setDarkMode() {
    // root.style.setProperty('--primary', 'rgb(200, 200, 200)');
    root.style.setProperty('color-scheme', 'dark');
    root.style.setProperty('--primary', 'hsl(0, 0%, 78%)');
    root.style.setProperty('--secondary', 'hsl(0, 0%, 9%)');
    root.style.setProperty('--body-bg', 'hsl(0, 0%, 10%)');
    root.style.setProperty('--header-bg', 'hsl(0, 0%, 0%)');
    root.style.setProperty('--section-bg', 'rgb(0, 0, 0)');
    root.style.setProperty('--shadow', '0px 3px 5px 0px hsl(0, 0%, 5%)');
    
}


lightModeButton.addEventListener('click', setLightMode);

function setLightMode() {
    // root.style.setProperty('--primary', 'rgb(200, 200, 200)');
    root.style.setProperty('color-scheme', 'light');
    root.style.setProperty('--primary', 'hsl(213, 100%, 15%)');
    root.style.setProperty('--secondary', 'hsl(0, 0%, 88%)');
    root.style.setProperty('--body-bg', 'hsl(228, 19%, 95%)');
    root.style.setProperty('--header-bg', 'hsl(220, 21%, 89%)');
    root.style.setProperty('--section-bg', 'hsl(220, 21%, 89%)');
    root.style.setProperty('--shadow', '0px 3px 5px 0px hsl(0, 0%, 67%)');
}



