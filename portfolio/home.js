var navMenu = document.getElementById("nav_Menu");
var navToggle = document.getElementById("menu_links");
var navClose = document.getElementById("close");

if (navToggle) {
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show_Menu');
    });
}


/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', function(){
        navMenu.classList.remove("show_Menu")
    })
}


/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.links')

function linkAction(){
    
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show_Menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


var skillsContent = document.getElementsByClassName("skills_content")
var skillsHeader = document.querySelectorAll('.skills_header')
function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills_content skills_close"
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }

   
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
     tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })

        tab.classList.add('qualification_active')
    })
})

/*==================== SERVICES MODAL ====================*/
 const modalViews = document.querySelectorAll(".service_subheader"),
       modalBtns = document.querySelectorAll(".modal_btn"),
       modalCloses = document.querySelectorAll(".modal_close")
 
 let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal")

 }

 modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
 })

 modalCloses.forEach((modalClose) =>{
     modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
     })
 })

 /*==================== portfolio====================*/

 
var count = 0

change(count)
function change(num){
    var images = document.getElementsByClassName("portfolio_header")
var dots = document.getElementsByClassName("dot")
  count += num


for (var i =0; i< images.length; i++){
    images[i].style.display = "none"
}
for (var i =0; i< dots.length; i++){
    dots[i].className = dots[i].className.replace(" show", "")
}
if (count > images.length-1){
    count = 0
}
if (count < 0){
    count = images.length -1
}
images[count].style.display ="flex"
dots[count].className += " show"
 /*==================== portfolio nav ====================*/
//  let swiper = new swiper (".testimonial_container",{
//     cssMode: true,
//     loop: true,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         precEl: 'swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });
}


 /*==================== testimonial ====================*/

//  let swiper = new swiper (".testimonial_container",{
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
// });


var swiper = new Swiper(".mySwiper", {

   loop:true,
   grabCursor: true,
   spaceBetween:48,
   
   
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_Menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_Menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== background color ====================*/


// var colors = ["#050542e6", "#1a4205", "#fbfbfe", "#ff000049"]

// var color = 0
// function changeTheme(){
//     document.getElementsByTagName('body')[0].style.backgroundColor = colors[color++]
//     if(color > colors.length -1 ){
//         color = 0
//     }
// }

// var headerContainer = document.getElementsByClassName("header_container")[0]
// var headerLeft = document.getElementsByClassName("header_left")[0]
// var toggleMenu = document.getElementsByClassName("toggle_menu")[0]

// if(menuLink){
//     menuLink.addEventListener("click", function(){
//         navMenu.classList.add("show-menu")
//         navMenu.style.display = "grid";
//         headerContainer.style.height = "160px"
//         headerLeft.style.display = "none"
//         toggleMenu.style.display = "none"
//     })

// }


// if(closeLink){
//     closeLink.addEventListener("click", function(){
//         navMenu.classList.remove("show-menu")
//         navMenu.style.display = "none";
//         headerContainer.style.height = "30px"
//         headerLeft.style.display = "block"
//         toggleMenu.style.display = "block"
//     })
// }