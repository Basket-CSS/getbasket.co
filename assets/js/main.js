window.addEventListener('load', (event) => {
    let gitHubPath = 'Basket-CSS/basket'; // example repo
    let url = 'https://api.github.com/repos/' + gitHubPath + '/tags';

    // $.get(url).done(function (data) {
    //     let versions = data.sort((v1, v2) => {
    //         return semver.compare(v2.name, v1.name)
    //     });
    //     console.log(versions);
    //     $('.latest-version').text(versions[0].name + " 🎉");
    // });    

    // Dropdown implementation not part of Basket yet,
    // will implement later but for now here is the work around:
    document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
        dropdown.addEventListener('click', (ev) => {
            let elSelector = (ev.target || ev.srcElement).getAttribute("data-dropdown");
            document.getElementById(elSelector).classList.toggle('hidden');
        });
    });  

    // apply HighlightJS
    var pres = document.querySelectorAll("pre>code");
    for (var i = 0; i < pres.length; i++) {
       hljs.highlightBlock(pres[i]);
    }
    
    // add HighlightJS-badge
    var options = {   // optional
       copyIconContent: "📋",
       checkIconContent: "✔️"
    };
    window.highlightJsBadge(options);
});