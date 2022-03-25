if (document.querySelector('.header__top')) {
  function getHeaderHeight() {
    let topHeader = document?.querySelector('.header__top')
    let getTopHeader = topHeader.offsetHeight
    let header = document?.querySelector('.header-desctop')
    header.style.top = '-' + (getTopHeader + 1) + 'px'
  }
  addEventListener('resize', getHeaderHeight())
}

if (document.querySelector('.header__bottom') && document?.querySelector('.left-menu')) {
  function getOffsetTop() {
    let bottomHeader = document?.querySelector('.header__bottom')
    let getBottomHeader = bottomHeader.offsetHeight
    let menu = document?.querySelector('.left-menu')
    menu.style.top = (getBottomHeader + 20) + 'px'
  }
  addEventListener('resize', getOffsetTop())
}


let actualYear = document?.querySelector('.actual-year')
if (actualYear) {
  let date = new Date().getFullYear()
  actualYear.innerHTML = date
}

// counter

let counterElem = document?.querySelectorAll('.counter');
if (counterElem) {
  counterElem.forEach(el => {
    el.addEventListener('click', function (e) {
      let input = this.querySelector('.counter__summ')
      let minus = this.querySelector('.counter__btn_minus')
      let plus = this.querySelector('.counter__btn_plus')
      if (e.target === minus) {
        if (input.value >= 2) {
          input.value--
        }
      }
      if (e.target === plus) {
        input.value++
      }
    })
  });
}

// Open basket

let basketBtn = document?.querySelector('.basket__button')
let basketMenu = document?.querySelector('.basket__menu')

if (basketBtn) {
  basketBtn.addEventListener('click', function (e) {
    basketMenu.classList.toggle('active')
  })
}

window.addEventListener('click', function (e) {
  if (!basketMenu.contains(e.target) && !basketBtn.contains(e.target) && !headerBasketBtn.contains(e.target)) {
    basketMenu.classList.remove('active');
  }
});

let headerBasketBtn = document?.querySelector('.header__basket')

if (headerBasketBtn) {
  headerBasketBtn.addEventListener('click', function (e) {
    basketMenu.classList.toggle('active')
    headerBasketBtn.classList.toggle('active')
  })
}

window.addEventListener('click', function (e) {
  if (!headerNav.contains(e.target) && !headerMenu.contains(e.target)) {
    headerNav.classList.remove('active');
    headerMenu.classList.remove('active');
  }
});


let headerMenu = document.querySelector('.header__menu')
let headerNav = document.querySelector('.header__bottom')

headerMenu.addEventListener('click', function () {
  headerNav.classList.toggle('active')
  headerMenu.classList.toggle('active')
})


