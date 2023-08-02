const synth = new Tone.Synth().toDestination();
const now = Tone.now();

document.addEventListener("DOMContentLoaded", () => {
  let sonidob = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'F4', 'G4', 'A4'];

  const blancas = document.querySelectorAll(".blanca");
  const negras = document.querySelectorAll(".containernegras button");

  // Función para reproducir una nota
  function reproducirNota(nota) {
    synth.triggerAttackRelease(nota, "8n");
  }

  blancas.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      reproducirNota(sonidob[index]);
    });
  });

  negras.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      reproducirNota(sonidob[index + 7]); // Los botones negros están después de las notas blancas en el array
    });
  });
});
