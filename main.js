let currentSelected = 0;
const nodes = document.querySelectorAll(".gallery-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function previous() {
    
}

function next() {
    prevBtn.disabled = false;
    nodes[currentSelected].classList.remove("active");
    currentSelected++;
    nodes[currentSelected].classList.add("active");

    if(currentSelected + 1 ){
        nextBtn.disabled = true;
    }

}

function init() {
    prevBtn.addEventListener("click", function() {
        previous();
    });

    nextBtn.addEventListener("click", function(){
        next();
    })
}

init();
