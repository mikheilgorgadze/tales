let taleElements = document.querySelectorAll(".tale-element");
let button = document.getElementById("next-button");
let clicked = true;

button.addEventListener('click', function (){
    if (clicked) {
        for (let i = 0; i < taleElements.length; i++) {
            taleElements[i].style.display = 'none';
        }
        clicked = false;
    }
    else {
        for (let i = 0; i < taleElements.length; i++) {
            taleElements[i].style.display = 'block';
        }
        clicked = true;
    }
})
