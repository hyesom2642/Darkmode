const state = document.querySelector('.container')
const alertText = document.querySelector('.alert')

function windowSize() {
  if (this.innerWidth > 428 || this.innerHeight < 926) {
    state.style.display = 'none'
    alertText.style.display = 'flex'
  } else {
    state.style.display = 'block'
    alertText.style.display = 'none'
  }
}

window.addEventListener('load', windowSize)
window.addEventListener('resize', windowSize)
