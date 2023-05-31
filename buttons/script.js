function genBtn(color) {
    const btn = document.createElement('button');
    btn.innerText = color;
    btn.style.background = color;
    btn.style.color = "white";
    btn.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
    })
    document.getElementById("container").appendChild(btn);
    btn.style.width = "125px";
    btn.style.height = "50px";
    return btn
}

genBtn("green")
genBtn("red")
genBtn("blue")