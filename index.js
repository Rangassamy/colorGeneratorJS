
// Fonction qui se répète toute les 4 secondes
setInterval(() => {
  // Génération de trois nombre aléatoire pour ensuite l'incrémenter en tant que rgb
  let R = Math.floor(Math.random() * 256);

  let G = Math.floor(Math.random() * 256);

  let B = Math.floor(Math.random() * 256);

  //Insertion du style en css sur le body en utilisant les trois variables ci-dessus
  document.body.style.background = `rgb(${R}, ${G}, ${B})`;
}, 3000);
