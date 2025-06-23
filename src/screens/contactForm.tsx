

import '../css/contactForm.css'; // Import your CSS file
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function contactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    console.log("btn clicked")
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    if (form.current) {
      setLoading(true);
      setStatus('Enviando...');
      console.log("iffff")

      emailjs.sendForm(
        'service_sergi',   // ¡Reemplaza con tu Service ID de EmailJS!
        'template_cfcsqen',  // ¡Reemplaza con tu Template ID de EmailJS!
        form.current,
        '-MabDCQwnW4sBrG3a'    // ¡Reemplaza con tu Public Key de EmailJS!
      )
      .then((result) => {
          console.log('Email enviado con éxito!', result.text);
          setStatus('¡Mensaje enviado con éxito!');
          if (form.current) {
            form.current.reset(); // Opcional: limpiar el formulario después de enviar
          }
      }, (error) => {
          console.error('Error al enviar email:', error.text);
          setStatus('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      })
      .finally(() => {
        setLoading(false);
      });
    }
  };




  return (
    <div className="contactForm">
        <div className='titleForm'>
          <h5>Rellena tus datos y te asesoraré sin compromiso</h5>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <div className='textInputs'>
          
          <input autoComplete="name" name="_name" className="txtInputBox" type="text" placeholder='Nombre' disabled={loading}></input>
          <input autoComplete="email" name="_email" className="txtInputBox" type="email" placeholder='Correo' disabled={loading}></input>
          <input  name="_phone" className="txtInputBox" type="number" placeholder='Teléfono' disabled={loading}></input>
          <input  name="_company" className="txtInputBox" type="text" placeholder='Empresa' disabled={loading}></input>
          <textarea name="_message" className="txtInputBoxMsg"  placeholder='Mensaje' disabled={loading}></textarea>
        </div>
        <div className='sendBtnDiv' >
          <button type="submit"   className='sendBtn' disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
          {status && <p  className="form-status">{status}</p>}
        </div>
        
        </form>


    </div>
  );
}

export default contactForm;

