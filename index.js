function tomar(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");
    results.then(response => response.json())
        .then(data => {
            done(data);
        });
}

tomar(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
            <article class="personaje">  <!-- AGREGADO class="personaje" -->
                <div class="imagen">
                    <img src="${personaje.image}" alt="Personaje">
                </div>
                <h2>${personaje.name}</h2>
                <h3>Localización: ${personaje.location.name}</h3>
                <h4>Origen: ${personaje.origin.name}</h4>
            </article>
        `);
        const main = document.querySelector("main");
        main.append(article);
    });
});
