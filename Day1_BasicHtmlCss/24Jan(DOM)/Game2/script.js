window.addEventListener("keydown", (e) => {
  if (e.repeat) return; // prevents buzzing on long press

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio || !key) return;

  key.classList.add("playing");

  // Play the audio from start
  audio.currentTime = 0;
  audio.play();

  // Stop the audio after 2 seconds (2000 ms)
  const duration = key.dataset.duration || 2000;

  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 500);
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
});
