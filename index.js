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
    root.style.setProperty('--primary', 'rgb(200, 200, 200)');
    root.style.setProperty('--secondary', 'rgb(23, 23, 23)');
    root.style.setProperty('--body-bg', 'rgb(25, 25, 25)');
    root.style.setProperty('--header-bg', 'rgb(0, 0, 0)');
    root.style.setProperty('--section-bg', 'rgb(0, 0, 0)');
    root.style.setProperty('--shadow', '0px 3px 5px 0px rgb(14, 14, 14)');
    
}


lightModeButton.addEventListener('click', setLightMode);

function setLightMode() {
    // root.style.setProperty('--primary', 'rgb(200, 200, 200)');
    root.style.setProperty('color-scheme', 'light');
    root.style.setProperty('--primary', 'rgb(0, 36, 79)');
    root.style.setProperty('--secondary', 'rgb(255, 255, 255)');
    root.style.setProperty('--body-bg', 'rgb(239, 240, 244)');
    root.style.setProperty('--header-bg', 'rgb(220, 224, 232)');
    root.style.setProperty('--section-bg', 'rgb(220, 224, 232)');
    root.style.setProperty('--shadow', '0px 3px 5px 0px rgb(170, 170, 170)');
}



