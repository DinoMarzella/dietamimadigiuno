window.addEventListener('DOMContentLoaded', () => {
  let btnOpenNav = document.querySelectorAll('.js-drawer-open-nav-mobile')
  let megamenuMobile = document.querySelector('#megamenuMobile')
  let megamenuClose = document.querySelectorAll('.megamenu__close')
  let megamenuCloseSubmenu = document.querySelectorAll('.megamenu__close-submenu')
  let megamenuOpenSubmenu = document.querySelectorAll('.megamenu__open-submenu')
  
  function toggleNav() {
    let submenus = document.querySelectorAll('.open')

    megamenuMobile.classList.toggle('open')
    document.body.classList.toggle('openMegamenu')

    if(!document.body.classList.contains('openMegamenu')) {
      submenus.forEach((element) => element.classList.remove('open'))
    }
  }

  function openSubmenu(e) {
    let target = e.target
    let submenu = target.parentElement.nextElementSibling
    submenu.classList.add('open')
  }

  function closeSubmenu(e) {
    let target = e.target
    let submenu = target.parentElement.parentElement.parentElement
    console.log(e);
    submenu.classList.remove('open')
  }

  megamenuOpenSubmenu.forEach(element => {    
    element.addEventListener('click', openSubmenu)
  })

  megamenuCloseSubmenu.forEach(element => {    
    element.addEventListener('click', closeSubmenu)
  })

  megamenuClose.forEach(element => {    
    element.addEventListener('click', toggleNav)
  })


  btnOpenNav.forEach(element => {    
    element.addEventListener('click', toggleNav)
  })
});