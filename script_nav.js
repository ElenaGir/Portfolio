//animation gsap bulles barre de navigation
const navdots = document.querySelector('#burger-checkbox');
let b1 = gsap.to('#bulle1', {
  y: -10, 
  x: 10,
  duration: .5, 
  ease: 'none',
  paused: true});

 let b2 = gsap.to('#bulle2', {
  y: 15, 
  x: -15,
  duration: .5, 
  ease: 'none',
  paused: true});

let b3 = gsap.to('#bulle3', {
  y: -10, 
  x: -15, 
  duration: .5, 
  ease: 'none',
  paused: true});
let b4 = gsap.to('#bulle4', {
  y: 15, 
  x: 10,
  duration: .5, 
  ease: 'none',
  paused: true});
let b5 = gsap.to('#bulle5', {
  y: -10, 
  x: 10, 
  duration: .5, 
  ease: 'none',
  paused: true});
let b6 = gsap.to('#bulle6', {
  y: 15,
  x: -15, 
  duration: .5, 
  ease: 'none',
  paused: true});

navdots.addEventListener('click', () => {
  b1.play();
  b2.play();
  b3.play();
  b4.play();
  b5.play();
  b6.play();
  
  if(b1.progress() == 1 && b3.progress() == 1){
     b1.reverse();
     b2.reverse();
     b3.reverse();
     b4.reverse();
     b5.reverse();
     b6.reverse();
     }
}) 

// menu accordeon
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
