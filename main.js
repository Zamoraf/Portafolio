let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:  #00b8c9;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:  #00b8c9;">Entudiante de licenciatura de ingeniería en computacion.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
