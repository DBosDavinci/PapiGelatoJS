function printdata(index) {
    var listitem = document.createElement("li");
    var text = document.createTextNode(index);
    listitem.appendChild(text);
    document.getElementById("persoon").appendChild(listitem)
}

fetch("opdracht1_bijlage.json")
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        data = JSON.parse(data)
        var parse = Object.values(data)
        parse.forEach(printdata)
    })