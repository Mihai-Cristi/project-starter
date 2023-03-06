// Just a starter file in case you need it
const primaryNav = document.querySelector('.main__navigation')
const navToggle = document.querySelector('.mobile-nav__toggle')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === "false") {
    console.log(visibility)
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('data-expanded', true)
  }
  if (visibility === "true") {
    console.log(visibility)
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('data-expanded', false)
  }
})
