const list = document.getElementsByTagName("*");
for (i = 0; i < list.length; i++) {
    if (list[i].textContent) {
        list[i].style.fontFamily = '"opendyslexic", sans-serif';
    }
};