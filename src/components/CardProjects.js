import "../style/cardprojects.css";

function CardProjects({ dataCard }) {
  return (
    <article className="cardProjects">
        <a href={ dataCard.link }  target="_blank" rel="noreferrer">
        <img className="cardProjectsImage" src={dataCard.gif} alt={dataCard.alt} />
        <ul className="techList">
          {
            dataCard.techs.map((tech, index) => (
              <li className="techItem" index={index}>{ tech }</li>
            ))
          }
        </ul>
        <p className="cardProjectsContent">{ dataCard.text }</p>
      </a>
    </article>
  );
}

export default CardProjects;
