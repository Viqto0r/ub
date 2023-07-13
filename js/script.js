window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger')
  const menu = document.querySelector('.menu')
  const menuItems = menu.querySelectorAll('.menu_item')

  hamburger.addEventListener('click', function () {
    this.classList.toggle('hamburger_active')
    menu.classList.toggle('menu_active')
  })

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('hamburger_active')
      menu.classList.remove('menu_active')
    })
  })
})
