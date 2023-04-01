const menuBtn = document.querySelector('#menuBtn')
const menuBtnImg = menuBtn.querySelector('img')
const menuList = document.querySelector('#menuList')
const menuLinks = menuList.querySelectorAll('a');



menuBtn.addEventListener('click', menuOpenClose);
menuLinks.forEach(element => {
    element.addEventListener('click', menuClose);
});


function menuOpenClose() {

    if (menuList.classList.toggle('open')) {
        menuBtnImg.src = './img/menuBtnClose.svg'
    } else {
        menuBtnImg.src = './img/menuBtn.svg'
    }

}

function menuClose() {
    menuBtnImg.src = './img/menuBtn.svg'
    menuList.classList.remove('open')
}