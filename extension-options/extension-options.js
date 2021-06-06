let saveButton = document.body.getElementsByClassName("save-button")[0];
let minFontSize = document.body.getElementsByClassName("font-size-input")[0]

saveButton.addEventListener("click", async () => {
    chrome.storage.sync.set({"fontSize": minFontSize.value});
});