import '../style/header.css';
import headerImage from '../images/astronauta.ico';

export default function Header() {
  return (
    <header className='main-header'>
      <nav className='main-header-nav'>
        <img alt='Icone de astronauta' src={ headerImage } className='main-header-img'/>
        <ul className='main-header-nav-list'>
          <li><a href='#'>Quem sou</a></li>
          <li><a href='#'>Experiência</a></li>
          <li><a href='#'>Projetos</a></li>
          <li><a href='#'>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
