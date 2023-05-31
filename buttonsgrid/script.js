function genBtn(number) {
    const btn = document.createElement('button');
    btn.innerText = number
    btn.style.fontSize = "50px"
    btn.style.background = "green";
    btn.style.margin = "25px";
    btn.style.height = "100px";
    btn.style.width = "175px";
    btn.addEventListener('click', () => {
        btn.style.background = "red";
    })
    document.getElementById("container").appendChild(btn);
    return btn
}

for (let i = 0; i < 30; i++) {
    genBtn(i + 1)
}