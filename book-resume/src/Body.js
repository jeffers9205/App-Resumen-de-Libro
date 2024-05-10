import React from 'react';

function Body() {
  return (
<div>
  <div className="container" style={{ display: 'flex' }}>
    <div style={{ marginRight: '20px', width: '50%', height: '315px' }}>
      <img src="https://ss365.liverpool.com.mx/xl/1097263643.jpg" alt="Harry Potter" style={{ width: '100%', height: '100%' }} />
    </div>
    <div style={{ width: '50%', height: '315px' }}>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/or24YFL2PN8" 
        title="Trailer de Harry Potter" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  </div>
  <div style={{ width: '100%', height: '315px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <p>Harry Potter y la Piedra Filosofal" es el primer libro de la famosa serie escrita por J.K. Rowling. La historia sigue a Harry Potter, un niño huérfano que descubre que es un mago el día de su undécimo cumpleaños. Es entonces cuando es invitado a asistir a la Escuela de Magia y Hechicería de Hogwarts. Allí, Harry se embarca en una emocionante aventura llena de magia, amistad y peligros.

En Hogwarts, Harry hace nuevos amigos como Ron Weasley y Hermione Granger, y juntos exploran los misterios del castillo mientras aprenden hechizos y pociones. Sin embargo, pronto descubren que algo siniestro acecha en las sombras: la búsqueda de la Piedra Filosofal, un objeto mágico que concede la inmortalidad.

Harry y sus amigos se ven envueltos en una carrera contra el tiempo para proteger la Piedra Filosofal de las garras del malvado Lord Voldemort, quien busca utilizarla para recuperar su forma física y recuperar su poder perdido.

La historia está llena de giros inesperados, momentos emocionantes y lecciones sobre el poder de la amistad y el coraje. "Harry Potter y la Piedra Filosofal" es una introducción mágica al mundo de Harry Potter y establece las bases para las aventuras futuras del joven mago.</p>
  </div>
</div>

  );
}

export default Body;