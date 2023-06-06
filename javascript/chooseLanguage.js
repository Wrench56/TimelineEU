"use strict";

const confirmationButton = document.querySelector("#language-menu__confirm");
const redirectHref = localStorage.getItem("language-redirect");

confirmationButton.addEventListener("click", () => {
    if (languageMenu.selectedIndex != 0) {
        localStorage.setItem("site-language", languageMenu.options[languageMenu.selectedIndex].value);
    }
    window.location.href = (redirectHref ? redirectHref : hostURL);
});