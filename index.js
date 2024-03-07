const hero = document.querySelector(".hero")

let nowdata = JSON.parse(localStorage.getItem('keydata')) || [];
nowdata.forEach((el) => {
    let home = document.createElement("div")
    let dom = document.createElement("div")
    let img = document.createElement("img")
    let btn = document.createElement("button")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")

    home.classList.add("block")
    btn.classList.add("click")
    dom.classList.add("dom")

    img.src = el.img
    p1.innerHTML = `${el.name}`
    p2.innerHTML = `${el.price}`
    btn.innerText = "to order";

    home.append(img)
    home.append(p1)
    dom.append(p2)
    dom.append(btn)
    home.append(dom)
    hero.append(home)
});