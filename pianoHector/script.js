const synth = new Tone.Synth().toDestination();
const now = Tone.now();

document.addEventListener("DOMContentLoaded", () => {
  let sonidob_mayor = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'F4', 'G4', 'A4', 'C#4' ];
  let sonidob_menor = ['C3', 'D3', 'D#3', 'F3', 'G3', 'G#3', 'A#3', 'C4', 'D4', 'D#4', 'F4', 'G4'];

  const blancas = document.querySelectorAll(".blanca");
  const negras = document.querySelectorAll(".containernegras button");
const playButton = document.querySelector(".play");

  let currentScale = sonidob_mayor; 

  const escalaSelect = document.getElementById("Escala");
  escalaSelect.addEventListener("change", () => {
    if (escalaSelect.value === "MAY") {
      currentScale = sonidob_mayor;
    } else if (escalaSelect.value === "MEN") {
      currentScale = sonidob_menor;
    }
  });

  function reproducirNota(nota) {
    synth.triggerAttackRelease(nota, "8n");
  }
  
  blancas.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      reproducirNota(currentScale[index]);
    });
  });

  negras.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      reproducirNota(currentScale[index + 7]);
    });
  });

  playButton.addEventListener("click",  () => {
     Tone.Transport.cancel(); // Espera a que se cancele la programación previa
  
    currentScale.forEach((nota, index) => {
      if (index !== 0) {
        const time = Tone.Time(index * 0.5).toSeconds();
        Tone.Transport.schedule((time) => {
          reproducirNota(nota);
        }, time);
      }
    });
  
    Tone.Transport.start();
  });
  
});

