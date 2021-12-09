let bars = document.getElementById('bars')
let body = document.getElementById('body')
let links = document.getElementsByClassName('links')[0]
let isOpen = false

bars.addEventListener('click', () => {
    if(isOpen){
        links.style.top = '-100%';
        body.style.backgroundColor = '#fff';
        isOpen = false;
    }
    else {
        links.style.top = '70px';
        body.style.backgroundColor = '#eee';
        isOpen = true;
    }
})

let more = document.getElementById('more')
let child1 = document.getElementsByClassName('child1')[0]
let isOPen = false

more.addEventListener('click', () => {
    if(isOPen) {
        child1.style.left = '-100%';
        body.style.backgroundColor = '#fff';
        more.style.backgroundColor = '#53BD95';
        more.style.color = '#fff';
        isOPen = false;
    }
    else {
        child1.style.left = '0px';
        body.style.backgroundColor = '#eee';
        more.style.backgroundColor = '#eee';
        more.style.color = '#53BD95';
        isOPen = true;
    }
})


// let bars = document.getElementById('bars')
// let body = document.getElementById('body')
// let links = document.getElementsByClassName('links')[0]


// bars.addEventListener('click', () => {
//     links.style.top = '70px';
//     body.style.backgroundColor = '#eee';
// })

// body.addEventListener('click', () => {
//     links.style.top = '-100%';
//     body.style.backgroundColor = '#fff';
// })