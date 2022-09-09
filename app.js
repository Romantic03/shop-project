    //add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

    //modal
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");

moreDetailsBtns.forEach(btn => {
    btn.addEventListener("click", openModal)
})

closeBtn.addEventListener("click", closeModal)

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal();
    }
})