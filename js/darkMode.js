const darkModeButton = document.querySelector('.dark-button-group')
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const text = darkModeButton.querySelector('span')

darkModeButton.addEventListener('click', function () {
  darkModeButton.classList.toggle('is-light')
  header.classList.toggle('is-light')
  footer.classList.toggle('is-light')

  if (darkModeButton.classList.contains('is-light')) {
    text.innerHTML = 'Light'
    document.body.style.background = '#fff'
  } else {
    text.innerHTML = 'Dark'
    document.body.style.background = '#000'
  }
})
