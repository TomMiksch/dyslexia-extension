chrome.runtime.onInstalled.addListener(() => {
    console.log("start")
    setFontFamily();
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log("Here")
    if (changeInfo.status == 'complete' && tab.active) {
        console.log("Wow")
  
      // do your things
  
    }
  })
  

function setFontFamily() {
    const list = document.getElementsByTagName("*");
    for (i = 0; i < list.length; i++) {
        if (list[i].textContent) {
            list[i].style.fontFamily = '"opendyslexic", sans-serif';
        }
    };
}