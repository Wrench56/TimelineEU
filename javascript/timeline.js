window.onload = (event) => {
    translate("../");
};

function load_subpage(page_name) {
    window.location.href = window.location.href.replace("timeline.html", `subpages/${page_name}`);
}