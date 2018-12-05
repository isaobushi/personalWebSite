
const icon = document.querySelector('.sphere')
const greetings = document.querySelector('.greetings')
const containerCenter = document.querySelector('.initial-center')
const containerPage = document.querySelectorAll('.container-page')





let changeGreetings = () => {
  greetings.style.opacity = '1'
  greetings.style.opacity = '0'
  // greetings.textContent = 'Welcome'
  setTimeout(()=> changeToWelcome(), 2000)

}
let changeToWelcome = () => {
  greetings.textContent = 'Welcome'
  greetings.style.opacity = '1'
  setTimeout(()=> squash(), 2000)

}
let squash = () => {
  icon.style.opacity = '0'
  greetings.style.transition = 'all, .5s ease-in-out'
  greetings.style.opacity = '0'
  containerCenter.style.height = '0'
  containerCenter.style.border = '1px solid black'
  setTimeout(()=> eliminateIntroduction(), 1000)
}
let eliminateIntroduction = () => {
  icon.style.display = 'none'
  greetings.style.display = 'none'
  containerPage.forEach(page => {
    page.style.display = 'flex'
  })
  setTimeout(()=> openMain(), 200)
}

let openMain = () => {
  containerCenter.style.border = 'none'
  containerCenter.style.height = '100vh'
  containerPage.forEach(page => {
    page.style.height = '50vh'
    page.style.opacity = '1'
    page.style.boxShadow = '5px 5px 5px grey'
  })
}


window.addEventListener('click',changeGreetings)
