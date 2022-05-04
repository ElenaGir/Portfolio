//  -------------------animation lettres page d'accueil--------
let blast = document.querySelectorAll("#break-me")[0];
let x = blast.innerHTML;
blast.innerHTML = "";
for (let i = 0; i < x.length; i++) {
  let tag = document.createElement("span");
  if (x[i] != " ") tag.innerHTML = x[i];
  else tag.innerHTML = "&nbsp;";
  tag.classList.add("anim");
  blast.appendChild(tag);
}

var all = document.querySelectorAll(".anim");
for (let i = 0; i < all.length; i++) {
  all[i].addEventListener("mouseenter", (e) => {
    all[i].classList.add("rubberBand");
  });
  all[i].addEventListener("animationend", (e) => {
    all[i].classList.remove("rubberBand");
  });
}

// ---------------- rebond de bonbons gsap---------------------------
let mouv = gsap.timeline(
    {
      defaults:
        {
          ease: "elastic.out(1, 0.5)", 
          duration: 5, 
          repeat: -1, 
          repeatDelay: 10, 
          yoyo:true
         }
     }
  );
  
    mouv.to(box1, {y: 50})
    mouv.to(box2, {y: 150 ,x: 20}, "<2.4")
    mouv.to(box3, {y: -150, x: 30}, "<2.2") 
    mouv.to(box4, {y: 70}, "<1.8")
    mouv.to(box5, {y: -70, x: 50}, "<1.4")