
let elButtonOpen = document.querySelector(".show-modal");
let elButtonClose = document.querySelector(".close-modal");
let elModal = document.querySelector(".modal-hidden");
let elOverlay = document.querySelector(".overlay");

elButtonClose.addEventListener("click" , function(evt){
    elModal.classList.add("modal")
    elOverlay.classList.add("modal")
})

elButtonOpen.addEventListener("click" , function(evt) {
    elModal.classList.remove("modal")
    elOverlay.classList.remove("modal")
})







