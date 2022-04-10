if (document.querySelector('.header__top')) {
  function getHeaderHeight() {
    let topHeader = document?.querySelector('.header__top')
    let getTopHeader = topHeader.offsetHeight
    let header = document?.querySelector('.header-desctop')
    header.style.top = '-' + (getTopHeader + 1) + 'px'
  }
  window.addEventListener('resize', getHeaderHeight())
}

if (document.querySelector('.header__bottom') && document?.querySelector('.left-menu')) {
  function getOffsetTop() {
    let bottomHeader = document?.querySelector('.header__bottom')
    let getBottomHeader = bottomHeader.offsetHeight
    let menu = document?.querySelector('.left-menu')
    menu.style.top = (getBottomHeader + 20) + 'px'
  }
  window.addEventListener('resize', getOffsetTop())
}

let actualYear = document?.querySelector('.actual-year')
if (actualYear) {
  let date = new Date().getFullYear()
  actualYear.innerHTML = date
}

// Open basket

let basketBtn = document?.querySelector('.basket__button')
let basketMenu = document?.querySelector('.basket__menu')

if (basketBtn) {
  basketBtn.addEventListener('click', function (e) {
    basketMenu.classList.toggle('active')
  })
}

let headerBasketBtn = document?.querySelector('.header__basket')

if (headerBasketBtn) {
  headerBasketBtn.addEventListener('click', function (e) {
    basketMenu.classList.toggle('active')
    headerBasketBtn.classList.toggle('active')
  })
}

let basket = document.querySelector('.basket__items')
let cartBtn = document.querySelector('.btn_cart')

window.addEventListener('click', function (e) {
  if (!headerNav.contains(e.target) && !headerMenu.contains(e.target)) {
    headerNav.classList.remove('active');
    headerMenu.classList.remove('active');
  }
  if (!basketMenu.contains(e.target) && !basketBtn.contains(e.target) && !headerBasketBtn.contains(e.target) && !e.target.closest('.card__item')) {
    basketMenu.classList.remove('active');
  }

  //Counter
  let counter
  if (e.target.classList.contains('counter__btn_plus') || e.target.classList.contains('counter__btn_minus')) {
    const counterWrapper = e.target.closest('.counter')
    counter = counterWrapper.querySelector('.counter__summ')
  }
  if (e.target.classList.contains('counter__btn_plus')) {
    counter = ++counter.value
  }
  if (e.target.classList.contains('counter__btn_minus')) {
    if (counter.value > 1) {
      counter = --counter.value
    } else if (e.target.closest('.basket__items') && counter.value == 1) {
      e.target.closest('.basket__item').remove();
      toggleCartStatus()
    }
  }

  // add to card

  if (e.target.classList.contains('btn_cart')) {
    const card = e.target.closest('.card__item')
    const cardProduct = {
      id: card.dataset.productId,
      img: card.querySelector('.card__img').querySelector('img').getAttribute('src'),
      name: card.querySelector('.card__title').innerText,
      prices: {
        price: card.querySelector('.card__prices').querySelector('span').innerText,
        tradePrice: card.querySelector('.card__prices').querySelector('span').innerText
      },
    };
    const itemInCart = basket.querySelector(`[data-product-id="${cardProduct.id}"]`);
    if (itemInCart) {
      const counterElement = itemInCart.querySelector('.counter__summ');
      counterElement.value = ++counterElement.value;
    } else {
      const cardInnerProduct = `<li class="basket__item" data-product-id="${cardProduct.id}">
          <div class="basket__top">
            <div class="basket__img">
                <img src="${cardProduct.img}" alt="">
            </div>
            <div class="basket__name">${cardProduct.name}</div>
          </div>
          <div class="basket__bottom">
            <div class="counter">
              <button class="counter__btn counter__btn_minus" type="button"></button>
              <input class="counter__summ" type="text" value="1">
              <button class="counter__btn counter__btn_plus" type="button"></button>
            </div>
            <div class="basket__price">${cardProduct.prices.price}</div>
          </div>
        </li>
      `
      basket.insertAdjacentHTML('beforeend', cardInnerProduct);
    }
    toggleCartStatus()
  }
});

let headerMenu = document.querySelector('.header__menu')
let headerNav = document.querySelector('.header__bottom')

headerMenu.addEventListener('click', function () {
  headerNav.classList.toggle('active')
  headerMenu.classList.toggle('active')
})

function toggleCartStatus() {
  const cartEmptyBadge = document.querySelector('.basket__empty');
  const cartProducts = document.querySelector('.basket__items')
  if (cartProducts.children.length > 0) {
    cartEmptyBadge.classList.add('none')
  } else {
    cartEmptyBadge.classList.remove('none')
  }
}
