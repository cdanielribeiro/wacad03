const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
//Declarando o array com imagens
const listImages = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
//Declarando image e texto
const alts = {
  "pic1.jpg" : "Luffy",
  "pic2.jpg" : "Zoro",
  "pic3.jpg" : "Nami",
  "pic4.jpg" : "Buggy",
  "pic5.jpg" : "One Piece"
}


/* Looping through images */
// Iteração da Array
for (const image of listImages) {
  // Criando elemento 
  const newImage = document.createElement("img");

   // Setando o path
  newImage.setAttribute("src", `images/${image}`);

  // setando a descrição
  newImage.setAttribute("alt", alts[image]);

  // Adicionado o elemento a Div
  thumbBar.appendChild(newImage);
  
  // Adicionando o evento para elemento
  newImage.addEventListener("click", e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class","light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class","dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

