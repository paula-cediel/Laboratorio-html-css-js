const contador = document.getElementById('contador');
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');

let valor = 0;

function actualizarContador() {
  contador.textContent = valor;

  if (valor === 10) {
    contador.style.color = 'orange';
  } else {
    contador.style.color = '#333';
  }
}

btnIncrementar.addEventListener('click', () => {
  valor++;
  actualizarContador();
});

btnDecrementar.addEventListener('click', () => {
  valor--;
  actualizarContador();
});
