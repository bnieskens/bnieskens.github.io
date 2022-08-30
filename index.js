// URL's //
// Kennisnet Podcast
document.getElementById("workA").href = "https://www.cmd-amsterdam.nl"; 
// Kennisnet Podcast
document.getElementById("kennisnetA").href = "https://kennisnet.libsyn.com/digitale-geletterdheid-plus-filosofie-en-programmeren"; 
document.getElementById("kennisnetB").href = "https://podcasts.apple.com/nl/podcast/digitale-geletterdheid-plus-filosofie-en-programmeren/id520494192?i=1000463299895"; 
// Spui 25
document.getElementById("spui25A").href = "https://youtu.be/SAspi1RH_PM?t=1032"; 
document.getElementById("spui25B").href = "https://spui25.nl/programma/smart-education"; 
// Kennisnet Digitale Geletterdheid
document.getElementById("kennisnetC").href = "https://www.kennisnet.nl/app/uploads/kennisnet/digitale-geletterdheid/Handboek_digitale_geletterdheid.pdf"; 
document.getElementById("kennisnetD").href = "https://www.kennisnet.nl/app/uploads/kennisnet-handboek-digitale-geletterdheid-2021-2022.pdf"; 
// LinkedIn
document.getElementById("linkedIn").href = "https://www.linkedin.com/in/nieskens/";
// Photo credit
document.getElementById("photoCredit").href = "https://unsplash.com/photos/m_HRfLhgABo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink";
// Settings
function openSettings(){
    console.log("Settings clicked");
    modal.style.display = "block";

}
document.querySelector("#settings").addEventListener('click', openSettings);

var modal = document.getElementById("settingsModal");
