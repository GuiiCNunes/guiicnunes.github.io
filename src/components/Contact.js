import contactData from "../data/contactData";
import "../style/contact.css";
import CardContact from "./CardContact";
import FormContact from "./FormContact";

export default function Contact() {
  return(
    <section className="contact">
      <article className="form">
        <p></p>
        <FormContact />
      </article>
      <article className="links">
        <ul className="list-links" >
          { contactData.map((data) => <CardContact data={data} />) }
        </ul>
      </article>
    </section>
  );
}
