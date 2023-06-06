"use strict";

const hostURL = `${window.location.origin}/TimelineEU`;
const chooseLanguageHref = "/pages/chooseLanguage.html";

if (localStorage.getItem("site-language") == null && window.location.pathname != `/TimelineEU${chooseLanguageHref}`) {
    localStorage.setItem("language-redirect", window.location.href);
    window.location.href = `${hostURL}${chooseLanguageHref}`;
}

const languageMenu = document.querySelector("#language-menu");

if (languageMenu != null)
    fetch(`${hostURL}/language/languages.json`)
        .then(response => response.json())
        .then(json => {
            for (const language of json) {
                let optionElement = document.createElement("option");
                optionElement.value = optionElement.textContent = language;
                languageMenu.appendChild(optionElement);
            }
        })
        .catch(error => console.warn(error)) // Temporary solution until error popup system gets added

function translate() {
    let filename;
    if (window.location.pathname.slice(-1) == "/")
        filename = "index.json";
    else
        filename = window.location.pathname.match(/[^\/]+$/)[0].slice(0, -4) + "json";
    let language = localStorage.getItem("site-language");

    if (window.location.pathname != `/TimelineEU${chooseLanguageHref}`)
        fetch(`${hostURL}/language/${language}/${filename}`)
            .then(response => response.json())
            .then((json) => {
                for (const key in json)
                    document.querySelectorAll(`*[name="${key}"]`).forEach(element => element.innerHTML = json[key]);
            })
            .catch(error => console.warn(error)); // Refer to comment on line 13
}

translate();