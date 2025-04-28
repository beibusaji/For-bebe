function showMessage() {

  document.getElementById('secretMessage').style.display = 'block';

  const iframe = document.getElementById('bgMusic');

  const iframeSrc = iframe.src;

  iframe.src = iframeSrc + "&auto_play=true";

}

function answerYes() {

  alert("Walang no dito boi, pasensya ka na.");

}

function answerNo() {

  alert("Yes na yes, ikaw na yan e!");

}

setInterval(() => {

  const heart = document.createElement('div');

  heart.classList.add('heart');

  heart.style.setProperty('--random', Math.random());

  heart.style.left = Math.random() * 100 + 'vw';

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);

}, 500);

CSS.registerProperty({
