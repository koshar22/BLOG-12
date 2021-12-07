let bars = document.getElementById('bars')
let links = document.getElementsByClassName('links')[0]
let isOpen = false

bars.addEventListener('click', () => {
    if(isOpen){
        links.style.top = '-100%';
        isOpen = false;
    }
    else {
        links.style.top = '70px';
        isOpen = true;
    }
})

let more = document.getElementById('more')
let child1 = document.getElementsByClassName('child1')[0]
let isOPen = false

more.addEventListener('click', () => {
    if(isOPen) {
        child1.style.left = '-100%';
        more.style.color = '$grey';
        isOPen = false;
    }
    else {
        child1.style.left = '0px';
        more.style.color = '$main';
        isOPen = true;
    }
})