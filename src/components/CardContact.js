export default function CardContact({ data }) {
  return (
    <a className="cardContact" href={data.link} >
      <img alt={data.alt} src={data.icon} />
      <p>{data.text}</p>
    </a>
  );
}
