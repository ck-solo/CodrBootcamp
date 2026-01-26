const errorMessage = document.getElementById("error-message");
window.addEventListener("keydown", (e) => {
  if (e.repeat) return; // prevents buzzing on long press

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if (!audio || !key) {
    errorMessage.textContent = `🚫 Key "${e.key}" is not mapped! 🚫`;
    errorMessage.style.display = "block";
 

    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 1000); // hide after 2 seconds

    return;
  }


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
