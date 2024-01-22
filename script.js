let qrImage = document.querySelector(".qr-img");
let btn = document.querySelector(".btn");
let input = document.querySelector(".enter-text input");
let night = document.querySelector(".toggle-btn");
let rootBody = document.querySelector("body");

function genarateQR(){
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
}

console.log(genarateQR)

btn.addEventListener("click", () => {
    genarateQR()
});



console.log(night);

function dark () {
    rootBody.classList.toggle("night");
}

night.addEventListener("dblclick", () => {
    dark()
});


