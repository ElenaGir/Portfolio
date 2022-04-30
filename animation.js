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