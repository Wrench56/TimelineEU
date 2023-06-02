if (localStorage.getItem("site-language") == null) {
    localStorage.setItem("site-language", "en-US");
}

window.onload = (event) => {
    translate(".");
};
