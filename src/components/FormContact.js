import { useState } from 'react';
import { send, init } from 'emailjs-com';
init("user_5AaY890ugRtOCFnEsMbWS");

// Font: https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1
export default function FormContact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Guilherme',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_nsr4xyc',
      'template_3xp1kg8',
      toSend,
      'user_5AaY890ugRtOCFnEsMbWS',
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    setToSend({
      from_name: '',
      to_name: 'Guilherme',
      message: '',
      reply_to: '',
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setToSend({
      from_name: '',
      to_name: 'Guilherme',
      message: '',
      reply_to: '',
    });
  }
  
  return (
      <form onSubmit={onSubmit} className="contact-form">
        <input
          type='text'
          name='from_name'
          placeholder='Seu nome'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='reply_to'
          placeholder='Seu email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          type='text'
          name='message'
          placeholder='Sua menssagem'
          value={toSend.message}
          onChange={handleChange}
          rows='5'
          maxLength='500'
        />
        <button type="submit">Enviar</button>
        <button type="button" onClick={ resetForm }>Limpar</button>
      </form>
  );
}
