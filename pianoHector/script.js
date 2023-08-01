
const synth = new Tone.Synth().toDestination();
const now = Tone.now()
document.addEventListener("DOMContentLoaded", () => {
  let sonidob = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3']
  const doblanca = document.querySelector(".do");
  const blancas = document.querySelector(".t")
  for (let i = 0; i < blancas.length; i++) {
    const element = array[i];
    blancas[i].addEventListener("click", async () => {
      console.log("jaj")
      synth.triggerAttackRelease("sonidob[i]", "8n");
    })
  }
  doblanca.addEventListener("click", async () => {
  });
});
