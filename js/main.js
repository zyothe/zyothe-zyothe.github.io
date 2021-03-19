
window.onscroll = changeBG
window.onload = changeBG
const navbar = document.getElementById('navbar')
const navbarIcon = document.getElementById('navbarTogglerIcon')
const home = document.getElementById('home')
const about = document.getElementById('about')
const work1 = document.getElementById('work-1')
const work2 = document.getElementById('work-2')
const work3 = document.getElementById('work-3')
const work4 = document.getElementById('work-4')
const footer = document.getElementById('footer')
const navItems = document.getElementsByClassName('nav-link')
const skills = document.querySelectorAll('.chart__bar')

const navItemDark = () => {
    for (var i = 0; i < 3; i++) {
        navItems[i].classList.remove('color-white')
        navItems[i].classList.add('color-dark')
    }
    navbarIcon.classList.remove('color-white')
    navbarIcon.classList.add('color-dark')
}
const navItemWhite = () => {
    for (var i = 0; i < 3; i++) {
        navItems[i].classList.remove('color-dark')
        navItems[i].classList.add('color-white')
    }
    navbarIcon.classList.remove('color-dark')
    navbarIcon.classList.add('color-white')
}
const showNavbar = (color) => {
    navbar.classList.remove('hide')
    navbar.classList.remove('bg-dark', 'bg-1', 'bg-2', 'bg-3','bg-4','bg-5')
    navbar.classList.add(color)
}
const hideNavbar = () => {
    navbar.classList.add('hide')
    navbar.classList.remove('bg-dark', 'bg-1', 'bg-2', 'bg-3')
}

const startSkillsAnimation = () => {
    const skillsBar = document.getElementsByClassName('chart__bar')
    console.log('starting animation')
    for( var i = 0; i < skillsBar.length; i++) {
        if(skillsBar[i].classList.contains('chart__bar'))
            skillsBar[i].classList.remove('chart__bar')
        skillsBar[i].classList.add('chart__bar__final')
    }
}


const clinetHeight = document.documentElement.clientHeight
function changeBG() {
    var scrollTop = document.documentElement.scrollTop
    //console.log(scrollTop)
    var homefromTop = home.offsetTop - scrollTop
    var aboutfromTop = about.offsetTop - scrollTop
    var work1fromTop = work1.offsetTop - scrollTop
    var work2FromTop = work2.offsetTop - scrollTop
    var work3FromTop = work3.offsetTop - scrollTop
    var work4FromTop = work4.offsetTop - scrollTop
    var footerFromTop = footer.offsetTop - scrollTop
    // console.log(Math.abs(aboutfromTop) < about.clientHeight/2)
    if (Math.abs(homefromTop) < home.clientHeight / 2) {
        document.body.classList.remove('bg-dark', 'bg-2', 'bg-1','bg-4','bg-3','bg-5')
        hideNavbar()
    }
    else if (Math.abs(aboutfromTop) < about.clientHeight / 2) {
        document.body.classList.remove('bg-dark', 'bg-2', 'bg-1', 'bg-3','bg-4','bg-5')
        document.body.classList.add('bg-dark')
        showNavbar('bg-dark')
        navItemWhite()
    }
    else if (Math.abs(work1fromTop) < work1.clientHeight / 2) {
        document.body.classList.remove('bg-dark', 'bg-2', 'bg-1', 'bg-3','bg-4','bg-5')
        document.body.classList.add('bg-1')
        showNavbar('bg-1')
        navItemWhite()
    }
    else if (Math.abs(work2FromTop) < work2.clientHeight / 2) {
        document.body.classList.remove('bg-dark', 'bg-2', 'bg-1', 'bg-3','bg-4','bg-5')
        document.body.classList.add('bg-2')
        showNavbar('bg-2')
        navItemDark()
    }
    else if (Math.abs(work3FromTop) < work3.clientHeight / 2) {
        document.body.classList.remove('bg-dark', 'bg-2', 'bg-1', 'bg-3','bg-4','bg-5')
        document.body.classList.add('bg-3')
        showNavbar('bg-3')
        navItemDark()
    }
    else if (Math.abs(work4FromTop) < work4.clientHeight / 2) {
        document.body.classList.remove('bg-dark', 'bg-2', 'bg-1', 'bg-3','bg-4','bg-5')
        document.body.classList.add('bg-4')
        showNavbar('bg-4')
        navItemDark()
    }
    else if (Math.abs(footerFromTop) < footer.clientHeight / 2) {
        document.body.classList.remove('bg-dark', 'bg-2', 'bg-1', 'bg-3','bg-4','bg-5')
        document.body.classList.add('bg-5')
        showNavbar('bg-5')
        navItemWhite()
    }
    else {
        document.body.classList.remove('bg-1', 'bg-dark', 'bg-2', 'bg-3','bg-4','bg-5')
        document.body.classList.add('bg-dark')
        showNavbar('bg-dark')
        navItemWhite()
    }
}



const scrollToWork = () => {
    window.scrollTo({
        top: work2.offsetTop - document.documentElement.scrollTop,
        behavior: 'smooth'
    })
}


$(document).ready(() => {
    
    var wh = $(window).height();
    console.log(wh)
    $('.chart__bar').waypoint( function (direction) {
        //console.log(this)
            $(this).addClass('chart__bar__final')
        },{
           offset:500
        });
})

