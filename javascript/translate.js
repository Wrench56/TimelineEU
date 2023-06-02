function translate(rel_path_to_lang) {
    let filename;
    if (document.location.pathname.slice(-1) == "/") 
        filename = "index.json";
    else
        filename = document.location.pathname.match(/[^\/]+$/)[0].slice(0, -4) + "json";
    
    let language = document.location.href.match(/(?<=html[?]lang=).*/)[0];
    fetch(`${rel_path_to_lang}/language/${language}/${filename}`)
    .then(response => response.json())
    .then((json) => {
        for (const key in json) {
            Array.from(document.getElementsByName(key)).forEach(node => node.innerHTML = json[key]);
        }
    });
}