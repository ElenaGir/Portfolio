//animation gsap bulles barre de navigation
const navdots = document.querySelector('#burger-checkbox');
let b1 = gsap.to('#bulle1', {
  y: -30, 
  x: 33,
  duration: .5, 
  ease: 'none',
  paused: true});
let b3 = gsap.to('#bulle3', {
  y: -60, 
  x: -35, 
  duration: .5, 
  ease: 'none',
  paused: true});
let b4 = gsap.to('#bulle4', {
  y: -34, 
  x: 33,
  duration: .5, 
  ease: 'none',
  paused: true});
let b5 = gsap.to('#bulle5', {
  y: -60, 
  x: -35, 
  duration: .5, 
  ease: 'none',
  paused: true});
let b6 = gsap.to('#bulle6', {
  y: -60, 
  duration: .5, 
  ease: 'none',
  paused: true});

navdots.addEventListener('click', () => {
  b1.play();
  b3.play();
  b4.play();
  b5.play();
  b6.play();
  
  if(b1.progress() == 1 && b3.progress() == 1){
     b1.reverse();
     b3.reverse();
     b4.reverse();
     b5.reverse();
     b6.reverse();
     }
}) 

