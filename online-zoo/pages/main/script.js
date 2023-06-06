window.addEventListener('DOMContentLoaded', ()=> {
console.log("Спасибо:)")
    // --- Burger-menu ---
    
    const menu = document.querySelector('.header_burger');
    const Container = document.querySelector('.container');
    const Burger = document.querySelector('.menu__burger');
    
    const menuClose = document.querySelector('.menu__close');



const test = document.querySelectorAll('.test_card')
  const CommentsSlider = document.querySelector('.test')
  
// carousel
const Next = document.querySelector('.arrow-right')
const Prev = document.querySelector('.arrow-left')

const Pets = document.querySelector('.sec3div');

const SliderCards = document.querySelectorAll('.foto-card_border')

function getSlides () {
    let arrCards = []
    for (const slide of SliderCards) arrCards.push(slide.cloneNode(true))
    return arrCards.sort(() => Math.random() - 0.5)    
}
getSlides()

let SliderWidth = Pets.clientWidth;

let currentSlide = document.querySelector('.section3')

function nextSlide () {
let Cards = getSlides()
let nextContainer = document.createElement('div')
nextContainer.className = 'section3'
nextContainer.append(...Cards)
Pets.append(nextContainer)
}

function prevSlide () {
    let Cards = getSlides()
    let prevContainer = document.createElement('div')
    prevContainer.className = 'section3'
    prevContainer.append(...Cards)
    Pets.prepend(prevContainer)
 prevContainer.style.marginLeft = `${-SliderWidth}px`
 return prevContainer
    }

    function moveLeft (){
        nextSlide ()
       currentSlide.style.marginLeft = `${-SliderWidth}px` 
    
       setTimeout(() => {
        currentSlide.remove()
        currentSlide = document.querySelector('.section3')
        
    },500)
    
    }

    function moveRight (){
        prevContainer = prevSlide()
        setTimeout(() => {
            prevContainer.style.marginLeft = `0px`   
        }, 0)

       setTimeout(() => {
        currentSlide.remove()
        currentSlide = document.querySelector('.section3')
        
    },500)
   
    }

    Next.addEventListener('click', moveLeft)

    Prev.addEventListener('click', moveRight)


// testim


    window.addEventListener("resize", (e) => {
        width = test[0].clientWidth
        rangeValue ()
    });
    
    const Scroll = document.querySelector('input[type="range"]');
    
    let width = test[0].clientWidth;
    
    
    
    let gap = 30; 
    
    Scroll.addEventListener("input",rangeValue)
    
    function rangeValue () {
        test[0].style.marginLeft =`${Scroll.value * (width + gap + 4) * -1}px`  
    }


// Popup

    menu.addEventListener ('click', () => {
        Container.classList.add('_open')
        Burger.classList.add('_open')
        document.body.style.overflow = 'hidden'
    })
    
    menuClose.addEventListener('click',() => {
     Container.classList.remove('_open')
     Burger.classList.remove('_open')
     document.body.style.overflow = 'visible'
      })
    
    Container.addEventListener('click',(e) => {
        if (e.target == Container) {
            Burger.classList.remove('_open')
            Container.classList.remove('_open')
            document.body.style.overflow = 'visible'
        }
      })
   
    
      //---Pop up---
     
      
      const Comments = document.querySelectorAll('.test_card')
      const Popup = document.querySelector('.popup')
    const Card = document.querySelector('.popup__card')
    const PopupClose = document.querySelector('.popup__close');
    
    
      Comments.forEach ((item, index) => {
        item.addEventListener('click', ()=> {
            if (window.matchMedia("(max-width: 640px)").matches) {
                Popup.classList.add('_show-popup')
                Card.innerHTML = '';
                document.body.style.overflow = 'hidden'
                Card.append(item.cloneNode(true))
              }
    
        })
      })
    
      PopupClose.addEventListener ('click',() => { 
        Popup.classList.remove('_show-popup')
        Card.innerHTML = '';
        document.body.style.overflow = 'visible'
      })
    
      Popup.addEventListener('click',(e) => {
        if (e.target == Popup) {
            Popup.classList.remove('_show-popup')
            Card.innerHTML = '';
            document.body.style.overflow = 'visible'
        }
      })
    })