

const icon = document.querySelector('.sphere')
const greetings = document.querySelector('.greetings')
const containerCenter = document.querySelector('.initial-center')
const containerPage = document.querySelectorAll('.container-page')
const about = document.querySelector('.about')
const skills = document.querySelector('.skills')
const portfolio = document.querySelector('.portfolio')
const contacts = document.querySelector('.contacts')
const vH = document.documentElement.clientHeight
const vW = document.documentElement.clientWidth




let aboutPhrase = `Hello, I'm Andrea Mele. I'm a full-stack web developer. Fast load times and lag free interaction, my highest priority. My layouts will work on any device, big or small. Strong preference for easy to use, intuitive UX/UI. Websites don't have to be static, I love making pages come to life.`
let arraySplitText = aboutPhrase.split('')
let letterNodes = document.createElement('span')
arraySplitText.forEach(character => {
  let charElement = document.createElement('span')
  charElement.innerHTML = `${character}`
  charElement.classList.add('letters')
  charElement.style.position = 'relative'
  charElement.style.fontSize = '3rem'
  charElement.style.opacity = '0'
  charElement.style.display = 'inline-block'
  // charElement.style.transitionDelay = `${delay}ms`
  charElement.style.transition = 'all .3s linear'
  letterNodes.appendChild(charElement)
  // about.style.padding = '30rem'
  // character.style.transition = `all, .5s linear`
})
about.appendChild(letterNodes)
const letters = document.querySelectorAll('.letters')

const splat = (letter, index) => {
  const randX = Math.round(Math.random() * vW)
  const randY = Math.round(Math.random() * vH)
  const randSide = Math.round(Math.random()*1) === 0 ? '-' : '+'
  letter.style.fontSize = `${Math.round(Math.random() * 40)}px`
  letter.style.transform = `translate(${randSide+randX}px, ${randSide+randY}px)`
  letter.style.transitionDelay = `${index*10}ms`
}


const divide = () => {
  for (let index = 0; index < letters.length; index++) {
    splat(letters[index], index)
  }
}

const stitch = () => {
  letters.forEach(letter =>{
    letter.style.fontSize = `25px`
    letter.style.opacity = `1`
    letter.style.transform = `translate(0, 0)`
    letter.style.color = 'white'
  })  
}


const goBackTogheter = () => {
  for (let index = 0; index < letters.length; index++) {
    stitch(letters[index])
  }

}
let opened = false 
const changeGreetings = () => {
  if (opened === false) { 
    greetings.style.opacity = '1'
    greetings.style.opacity = '0'
    // greetings.textContent = 'Welcome'
    opened = true
    setTimeout(()=> changeToWelcome(), 2000)
  }
  else {
    return
  }
}

const changeToWelcome = () => {
  greetings.textContent = 'Welcome'
  greetings.style.opacity = '1'
  setTimeout(()=> squash(), 2000)
  divide()
}

const squash = () => {
  icon.style.opacity = '0'
  greetings.style.transition = 'all, .5s ease-in-out'
  greetings.style.opacity = '0'
  containerCenter.style.height = '0'
  containerCenter.style.border = '1px solid black'
  setTimeout(()=> requestAnimationFrame(eliminateIntroduction), 1000)
}

const eliminateIntroduction = () => {
  icon.style.display = 'none'
  greetings.style.display = 'none'
  containerPage.forEach(page => {
    page.style.width = '40vh'
    page.style.display = 'flex'
  })
  setTimeout(()=> openMain(), 300)
}

const openMain = () => {
  containerCenter.style.border = 'none'
  containerCenter.style.height = '100vh'
  containerPage.forEach(page => {
    page.style.height = '80vh'
    page.style.opacity = '1'
    page.style.boxShadow = '5px 5px 5px grey'
  })
}


const openAbout = () => {

  skills.style.zIndex = '-2'
  portfolio.style.zIndex = '-2'
  contacts.style.zIndex = '-2'
  skills.style.position = 'fixed'
  portfolio.style.position = 'fixed'
  contacts.style.position = 'fixed'
  about.style.marginRight = '3rem'
  setTimeout(()=> requestAnimationFrame(throwLettersIn), 250)
}
const throwLettersIn = () => {
  about.style.transform = 'scale(1.05)'
  about.style.width = '100vw'
  letters.forEach(letter => {
    letter.style.opacity = '1'
  })

  requestAnimationFrame(goBackTogheter)

}

// const killPages = () => {
//   skills.style.display = 'none'
//   portfolio.style.display = 'none'
//   contacts.style.display = 'none'
//   goBackTogheter()

// }

window.addEventListener('click',changeGreetings)
about.addEventListener('click',openAbout)
