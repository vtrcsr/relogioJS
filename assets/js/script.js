const ponteiroSeg = document.querySelector(".ponteiro.segundo");
const ponteiroMin = document.querySelector(".ponteiro.minuto");
const ponteiroHor = document.querySelector(".ponteiro.hora");

const relogio = () => {
  const dataAtual = new Date();
  const segundosPorcento = dataAtual.getSeconds() / 60;
  const minutosPorcento = ((segundosPorcento + dataAtual.getMinutes()) / 60);
  const horasPorcento = ((minutosPorcento + dataAtual.getHours())) / 12;

  rotacao(ponteiroSeg, segundosPorcento);
  rotacao(ponteiroMin, minutosPorcento);
  rotacao(ponteiroHor, horasPorcento);
};

const rotacao = (element, rotacaoPorcento) => {
  element.style.setProperty("--rotacao", rotacaoPorcento * 360);
};

relogio();

setInterval(relogio, 1000);
