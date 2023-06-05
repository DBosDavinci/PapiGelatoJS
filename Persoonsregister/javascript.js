function printdata(info, persoon) {
    var listitem = document.createElement("li");
    var text = document.createTextNode(info);
    listitem.appendChild(text);
    listitem.setAttribute("class", "listitems")
    document.getElementById(persoon).appendChild(listitem)
}

fetch("opdracht2_bijlage.json")
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        data = JSON.parse(data)
        for (i = 0; i < 7; i++) {
            var persoon = data[i]
            var list = document.createElement("ul");
            list.setAttribute("id", persoon["voornaam"])
            document.body.appendChild(list)
            var parse = Object.values(persoon)
            parse.forEach(function (item) {
                printdata(item, persoon["voornaam"])
            })
        }
    })

function updateSite(form) {

    document.querySelectorAll('.listitems').forEach(e => e.remove());

    fetch("opdracht2_bijlage.json")
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            data = JSON.parse(data)
            for (i = 0; i < 7; i++) {
                var persoon = data[i]
                var filterAge = form.filterage.value;

                if (persoon["leeftijd"] >= filterAge) {
                    var parse = Object.values(persoon)
                    parse.forEach(function (item) {
                        printdata(item, persoon["voornaam"])
                    })
                } else {
                    continue
                }
            }
        })

}