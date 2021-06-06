// Logs in main console window
let minFontSize = 0;

chrome.storage.sync.get("fontSize", ({ fontSize }) => {
    console.log(fontSize)
    minFontSize = fontSize
    console.log(minFontSize)
});

// This is running before we're getting the minFontSize. Need to recallibrate
const list = document.getElementsByTagName("*");
for (i = 0; i < list.length; i++) {
    if (i === 0) {
        console.log("min: " + minFontSize)
    }
    if (list[i].textContent) {
        list[i].style.fontFamily = '"opendyslexic", sans-serif';
        list[i].style.fontSize = minFontSize
    }
};