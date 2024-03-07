const name = document.querySelector(".name")
const price = document.querySelector(".price")
const photo = document.querySelector(".photo")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    addData()
})

function addData () {
    let obj = {
        name: name.value,
        price: price.value,
        photo: photo.value,
        id: Data.now()
    }
    let data = JSON.parse(localStorage.getItem('keydata')) || [];
    data.push(obj)
    localStorage.setItem('keydata', JSON.stringify(data))
    name.value = ""
    price.value = ""
    photo.value = ""
}