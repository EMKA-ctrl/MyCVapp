
import '../css/Home.css';
import React from 'react';
import { Link } from 'react-router-dom';


const CVScreen: React.FC = () => {
  

  return (
    
    <div className="cv-container">
      
      <header className="cv-header">
        <h1 className="cv-name">Marc Sebastià</h1>
      </header>

      <section className="cv-profile-section">
        <img
          src='src\assets\perfil.jpg' // Asegúrate de que la imagen esté en la carpeta public/
          alt="Marc Sebastià"
          className="cv-profile-image"
        />
        <p className="cv-greeting">Dear curious,</p>
        <p className="cv-welcome-message">Welcome to my extended CV <span role="img" aria-label="smiley face">😊</span></p>
      </section>

      <section className="cv-buttons-section">
        <Link to='/work-experience' className="cv-button">
          <span>Work Experience  💼</span>
          
        </Link>

        <Link to='/work-experience' className="cv-button">
          <span>Studies 🎓</span>
          
        </Link>

        <Link to='/work-experience' className="cv-button">
          <span>Courses & Certificates 🏅</span>
          
        </Link>
      </section>
      <div className="cv-social-icons">
          <button className="social-icon-button" onClick={() =>  window.open('https://www.linkedin.com/in/marc-sebastia/')}>
            <img src='src\assets\linkedin_logo.png'></img> 
          </button>
          <button className="social-icon-button" onClick={() => window.open('https://github.com/EMKA-ctrl')}>
            <img src='src\assets\github_logo.png'></img>
          </button>
          <Link  to='/work-experience' className="social-icon-button" >{/* Aqui va el link al contact form */}
            <img src='src\assets\mail_logo.png'></img>
          </Link>
        </div>

      <footer className="cv-footer">
        <p className="cv-footer-text">I made this with React & Typescript!</p>
        <div className="cv-powered-by">
          <img src='src/assets/react.svg'/> 
          <img src='src\assets\Typescript_logo.png'/>
          
          
        </div>
      </footer>
    </div>
    
  );
};

export default CVScreen;