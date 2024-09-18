let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(1000, 0, 15));
  textAlign(CENTER, CENTER);
  textSize(32);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Five Nights At Freddy's: Pesadelo sem Fim";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Scott Pilgrim: Contra o Mundo";          
        } else{
         return "Jumanji: Bem Vindo a Selva";
        }
      } else {
        if (gostaDeFantasia) {
          return "O Hobbit";
        } else {
          return "Castelo Animado  ";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A Bela e A Fera";
    } else {
      return "Shrek";
    }
  }
}