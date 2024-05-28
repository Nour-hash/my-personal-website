import React from 'react';
import './Contact.css'; // Add a separate CSS file for styling

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-section">
                <div className="contact-container">
                    <div className="contact-header">
                        <h5 className="contact-title">KONTAKT</h5>
                    </div>
                    <div className="contact-description">
                        <p>Ich bin ein Textabschnitt. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Hier können Sie Ihren Besuchern mehr erzählen.</p>
                        <p><a href="mailto:nournassar@hotmail.de">nournassar@hotmail.de</a></p>
                        <p>Tel.: +43 676 3043802</p>
                    </div>
                    <form className="contact-form">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="E-Mail-Adresse" required />
                        <input type="tel" name="phone" placeholder="Telefon" />
                        <textarea name="message" placeholder="Nachricht" required></textarea>
                        <button type="submit">Absenden</button>
                    </form>
                   
                    <div className="social-media">
                        <a href="https://www.linkedin.com/company/wix-com" target="_blank" rel="noopener noreferrer">
                            <img src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png" alt="LinkedIn" />
                        </a>
                        <a href="https://www.linkedin.com/company/wix-com" target="_blank" rel="noopener noreferrer">
                            <img src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
