if (document.location.href.match(/(?<=html[?]lang=).*/) == null) {
    window.location.href += "?lang=en-US";
}

window.onload = (event) => {
    translate(".");
};
  