

const greetings = document.querySelector('.greetings')
const containerCenter = document.querySelector('.initial-center')
const containerHeader = document.querySelector('.initial-header')
const containerPage = document.querySelectorAll('.container-page')
const vH = document.documentElement.clientHeight
const vW = document.documentElement.clientWidth
const subIntro = document.querySelector('.sub-intro')
const iconsBox = document.querySelector('.containerIcons')
const btnSkills = document.querySelector('.button-container')
const textAbout = document.querySelector('.text-about')
const aElem = document.querySelector('.btn-hero')
const aElemF = document.querySelector('.first-btn')
const aElemS = document.querySelector('.second-btn')



let opened = false
const changeGreetings = () => {
  if (opened === false) {
    greetings.style.opacity = '1'
    greetings.style.opacity = '0'
     opened = true
    setTimeout(() => requestAnimationFrame(changeToWelcome), 1000)
  }
  else {
    return
  }
}

const changeToWelcome = () => {
  greetings.innerHTML = '<h1 class=welcome>Welcome</h1>'
  setTimeout(() => requestAnimationFrame(squash), 1000)
}

const squash = () => {
  greetings.style.transition = 'all, .5s ease-in-out'
  greetings.style.opacity = '0'
  containerCenter.style.height = '0'
  containerCenter.style.border = '1px solid rgb(75, 75, 75)'

  setTimeout(() => requestAnimationFrame(eliminateIntroduction), 1000)
}

const eliminateIntroduction = () => {
  greetings.style.display = 'none'
  subIntro.style.display = 'none'
  subIntro.style.display = 'none'
  aElemF.style.display = 'none'
 
  requestAnimationFrame(openMain)
}

const openMain = () => {
  containerCenter.style.border = '.3px solid #cacaca'
  aElemS.style.display = 'flex'
  aElemS.style.justifyContent = 'center'
  document.querySelector('.btn-hero').style.width = '20rem'
  containerCenter.style.height = '100vh'
  // iconsBox.style.transform = 'translateY(50rem)'
  let containerAbout = document.createElement('div')
  let textAbout = document.createElement('div')
  containerAbout.classList.add('.container-about')
  textAbout.innerHTML =`
  I'm a full-stack web developer.
  Fast load times and lag free <span class='yellow'>interaction</span>, 
  my highest priority. 
  My layouts will work on any device, big or small. 
  Strong preference for easy to use, <span class='yellow'>intuitive</span> UX/UI. 
  Websites don't have to be static, 
  I love making pages come to <span class='yellow'>Life</span>.
  <span class='yellow'> \\ (º – º) /</span>`
  textAbout.classList.add('text-about')
  containerAbout.appendChild(textAbout)
  containerCenter.appendChild(containerAbout)
  containerCenter.insertBefore(containerAbout, containerCenter.firstChild);
}


const closeFirstPage = () => {
  document.querySelector('.initial-center').style.height = '0'
  setTimeout(() => requestAnimationFrame(close), 1000)
}
const close = () => {
  const destroy = () => {
    skills.remove()
    setTimeout(() => requestAnimationFrame(openPortfolio), 1000)
    
  }
  const closeSkills = () => {
    skills.style.height = '0vh'
    setTimeout(()=> requestAnimationFrame(destroy), 1000)
  }

  document.querySelector('.initial-center').lastChild.remove()
  // document.querySelector('.initial-center').style.height = '100vh'
  let skills = document.createElement('div')
  skills.classList = 'skills'
  document.querySelector('.initial-center').appendChild(skills)
  skills.style.opacity = '1'
  skills.innerHTML = `
  <div class=box-skills> 
    <div class=text-skills> C/> Downloading Skills package
      <span class=dots>...</span> 
      <span class=cursor skills>&#128126;</span>
    </div>
    <div class="bar-out">
      <div class="bar-in"> </div> 
    </div> 
  </div>`
  
  let skillsIcons = document.createElement('div')
  const reactIcons = document.createElement('div')
  const htmlIcons = document.createElement('div')
  const jsIcons = document.createElement('div')
  const rubyIcons = document.createElement('div')
  const nodeJS = document.createElement('div')
  const postgreSqlIcons = document.createElement('div')
  const sassIcons = document.createElement('div')

  const cssIcons = document.createElement('div')
  const gitHubIcons = document.createElement('div')
  const rubyOnRailsIcons = document.createElement('div')


  const arrSkills = [reactIcons, htmlIcons, jsIcons, rubyIcons, nodeJS, postgreSqlIcons,cssIcons,rubyOnRailsIcons,gitHubIcons, sassIcons]
  reactIcons.style.backgroundImage = `url(/images/React-icon.svg)`
  gitHubIcons.style.backgroundImage = `url(/images/Octicons-mark-github.svg)`
  htmlIcons.style.backgroundImage = `url(/images/HTML5_logo_and_wordmark.svg)`
  cssIcons.style.backgroundImage = `url(/images/CSS.3.svg)`
  jsIcons.style.backgroundImage = `url(/images/Unofficial_JavaScript_logo_2.svg)`
  rubyIcons.style.backgroundImage = `url(/images/Ruby_logo.svg)`
  rubyOnRailsIcons.style.backgroundImage = `url(/images/Ruby_On_Rails_logo.svg)`
  nodeJS.style.backgroundImage = `url(/images/node.svg)`
  postgreSqlIcons.style.backgroundImage = `url(/images/psql.png)`
  sassIcons.style.backgroundImage = `url(/images/psql.png)`

  
  arrSkills.forEach(skill => {
    skill.classList = 'skill-icon'
    skill.style.backgroundColor = 'transparent'
    skill.style.backgroundSize = 'contain'
    skill.style.backgroundRepeat = 'no-repeat'
    skill.style.height = '5rem'
    skill.style.width = '5rem'
    skill.style.borderRadius = '.5rem'
    skill.style.transition = 'all 1s linear'
  })
  skillsIcons.style.padding = ' '
  skillsIcons.classList = 'skills-icons-box'
  skillsIcons.style.display = 'grid'
  skillsIcons.style.gridTemplateColumns = '5rem 5rem 5rem 5rem 5rem'
  skillsIcons.style.gridTemplateRows = '5rem 5rem' 
  skillsIcons.style.gridGap = '3rem 7rem'
  skillsIcons.style.width = '50vw'
  skillsIcons.style.margin= '2%'
  skillsIcons.style.height = '25vh'
  skills.appendChild(skillsIcons)
  let elem = document.querySelector('.bar-in')
  const barGrow = () => {
    let barWidth = 0;
    let id = setInterval(frame, 45)
    function frame() {
      if (barWidth >= 40) {
        elem.textContent = 'COMPLETED!'
        document.querySelector('.dots').textContent = ''
        document.querySelector('.text-skills').textContent = 'Skills installed succesfully'
        document.querySelector('.text-skills').innerHTML = '&#128406;'
        let containerBtnPortfolio = document.createElement('div')
        let buttonPortfolio = document.createElement('button')
        buttonPortfolio.classList = 'btn-portfolio'
        containerBtnPortfolio.classList = 'box-btn-portfolio'
        buttonPortfolio.textContent = 'Portfolio'
        buttonPortfolio.addEventListener('click', closeSkills)
        containerBtnPortfolio.appendChild(buttonPortfolio)
        skills.appendChild(containerBtnPortfolio)
        clearInterval(id);
      } else {
        barWidth++;
        if (barWidth === 5 || barWidth === 10 || barWidth === 15 || barWidth === 20 || barWidth === 25 || barWidth === 28|| barWidth === 30 || barWidth === 34  || barWidth === 35  || barWidth === 40)
        {skillsIcons.appendChild(arrSkills.shift())}
        // elem.style.backgroundColor = '#16a085'
        elem.style.width = `${barWidth}vw`
      }
    }
  }
  barGrow()
}


const openPortfolio = () => {
  document.querySelector('.initial-center').remove()
  let containerPortfolio = document.createElement('div')
  // let portFolioTileTTT = document.createElement('div')
  // portFolioTileTTT.classList.add('port-TTT')
  // let portFolioTileEAF = document.createElement('div')
  // portFolioTileEAF.classList.add('port-EAF')
  // let portFolioTileZoneIn = document.createElement('div')
  // portFolioTileZoneIn.classList.add('port-zone-in')
  // let portFolioTileThis = document.createElement('div')
  // portFolioTileThis.classList.add('port-this')
  // const portArray = [portFolioTileTTT,portFolioTileEAF,portFolioTileZoneIn,portFolioTileThis]
  // portArray.forEach(port => {
  //   containerPortfolio.appendChild(port)
  // })

  containerPortfolio.innerHTML ='<a target="_blank" href="https://playtictactoe.org/"> <div class=port-TTT></div></a> <a target="_blank" href="https://eaf.herokuapp.com/"> <div class=port-EAF></div></a> <a target="_blank" href="https://github.com/isaobushi/ZoneIn"> <div class=port-zone-in></div></a> <a target="_blank" href="https://github.com/isaobushi/personalWebSite"><div class=port-this></div></a>'
  containerPortfolio.classList.add('box-portfolio')
  containerHeader.appendChild(containerPortfolio)
}



const docStyle = document.documentElement.style
const boundingClientRect = aElem.getBoundingClientRect()

aElem.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect.left
	const y = e.clientY - boundingClientRect.top
	
	const xc = boundingClientRect.width/2
	const yc = boundingClientRect.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem.onmouseleave = function(e) {	
	docStyle.setProperty('--ty', '0')
	docStyle.setProperty('--rx', '0')
	docStyle.setProperty('--ry', '0')	
}

aElem.onmousedown = function(e) {
	docStyle.setProperty('--tz', '-25px')
}
document.body.onmouseup = function(e) {
	
	docStyle.setProperty('--tz', '-12px')
}

aElem.addEventListener('click', changeGreetings)
aElemS.addEventListener('click', closeFirstPage)
