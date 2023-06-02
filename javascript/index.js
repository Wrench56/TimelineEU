if (!/[?]lang=/.test(window.location.href)) {
    window.location.href += "?lang=en-US";
}

window.onload = (event) => {
    translate(".");
};
