const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(Window.scrollY > nav.offsetheight + 150){
        nav.classList.add('active')
    } else {
        nav.classList.remove ('active')
    }
}