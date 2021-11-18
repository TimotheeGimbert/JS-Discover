function getInput() {
  input = prompt("Merci de choisir un entier positif entre 1 et 25 ...");
  return input;
}
  
function draw_half_pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n-i; j++) {
      line += ".";
    }
    for (let j = n-i; j < n; j++) {
      line += "#";
    }
    console.log(line);
  }
}
  
function half_pyramid() {
  console.log("Salut, bienvenue dans ma demi pyramide ! Combien d'étages veux-tu ?");
  nbFloors = getInput();
  console.log("Voici une demi-pyramide à #{nbFloors} étages :");
  draw_half_pyramid(nbFloors);
}

half_pyramid();