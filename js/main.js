// Just a starter file in case you need it
const primaryNav = document.querySelector('.main__navigation')
const navToggle = document.querySelector('.mobile-nav__toggle')
const LogoWCO = document.querySelector('.logo_white_capsoff_button')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === "false") {
    console.log(visibility)
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('data-expanded', true)
		LogoWCO.setAttribute('data-expanded', true)
  }
  if (visibility === "true") {
    console.log(visibility)
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('data-expanded', false)
		LogoWCO.setAttribute('data-expanded', false)
  }
})


