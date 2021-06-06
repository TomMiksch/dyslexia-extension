// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//     changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setFontFamily into current page
console.log("Wow!")
// chrome.tabs.onUpdated.addEventListener( async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: setFontFamily,
//     });
// });

// The body of this function will be executed as a content script inside the
// current page
// function setFontFamily() {
const list = document.getElementsByTagName("*");
for (i = 0; i < list.length; i++) {
    if (list[i].textContent) {
        list[i].style.fontFamily = '"opendyslexic", sans-serif';
    }
};
// }