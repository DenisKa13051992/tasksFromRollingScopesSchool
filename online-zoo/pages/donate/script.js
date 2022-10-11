const menu = document.querySelector('.header_burger');
    const Container = document.querySelector('.container');
    const Burger = document.querySelector('.menu__burger');
    
    const menuClose = document.querySelector('.menu__close');



const test = document.querySelectorAll('.test_card')
  const CommentsSlider = document.querySelector('.test')

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
 
  const Popup = document.querySelector('.popup')
  const Card = document.querySelector('.popup__card')
  const PopupClose = document.querySelector('.popup__close');


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



  //--- Amount ---

const Amount = document.querySelector('.pic5_input')
const DonateButton = document.querySelector('.logo_button')
const Inputs = document.querySelectorAll('.amount-inp')

DonateButton.addEventListener('click', (e) => {
    e.preventDefault()
})


Amount.addEventListener('input', (e) => {
    if (Amount.value.length > 4) Amount.value = Amount.value.substr(0, 4);
    Amount.value = Amount.value.replace(/^0/, '');
    Inputs.forEach((item, index) =>  {
        if (Amount.value == item.value) item.setAttribute('checked', 'true')
        else item.removeAttribute('checked', 'true')
    })
  }) 

  Inputs.forEach((item, index) => {
    if (item.checked) Amount.value = item.value
    item.addEventListener('click', () => {
        Amount.value = item.value
    })
  } )

