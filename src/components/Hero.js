import '../style/hero.css';
import heroImage from '../images/hero-image.png';

export default function Hero() {
  return(
    <section className='hero'>
      <article className='hero-content'>
        <img alt='Guilherme Nunes' src={ heroImage } className='hero-image' />
        <article className='hero-about'>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Diuretics paradis num copo é motivis de denguis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Pra lá , depois divoltis porris, paradis.
          Quem num gosta di mé, boa gentis num é. Sapien in monti palavris qui num significa nadis i pareci latim. Detraxit consequat et quo num tendi nada. Casamentiss faiz malandris se pirulitá.
          In elementis mé pra quem é amistosis quis leo. Copo furadis é disculpa de bebadis, arcu quam euismod magna. A ordem dos tratores não altera o pão duris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.</p>
        </article>  
      </article>
    </section>
  );
}
