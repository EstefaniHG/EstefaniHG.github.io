let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #00ffff;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:	#ad23ea;">Estudiante de Ingeniería Biomédica, me gusta la tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
