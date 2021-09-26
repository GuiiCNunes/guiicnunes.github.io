import './App.css';
import image from './images/DSC_0370-cortado.JPG';

function App() {
  return (
    <main className="page">
      <section className="page-content">
        <img alt="Foto de Guilherme" src={ image } className="page-image" />
        <article className="page-text">
        <p><span>Olá, viajante!</span></p>
        <p>Muito obrigado pela sua visita! Infelizmente você chegou mais cedo que o esperado, ainda estamos pintando alguns bits e alinhando alguns componentes para a versão final ☹️
        Mas não fique triste! Você ainda pode pegar todas as minhas informações atualizadas nas minhas redes abaixo!</p>
        <nav>
          <a href="https://github.com/GuiiCNunes">
            <img alt="Github icone" src="https://cdn-icons-png.flaticon.com/512/733/733609.png" />
          </a>
          <a href="https://www.linkedin.com/in/guiicnunes/">
          <img alt="Linkedin icone" src="https://cdn-icons-png.flaticon.com/512/145/145807.png" />
          </a>
          <a href="https://www.instagram.com/guicnunes/">
          <img alt="Instagram icone" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" />
          </a>
        </nav>
        </article>
      </section>
    </main>
  );
}

export default App;
