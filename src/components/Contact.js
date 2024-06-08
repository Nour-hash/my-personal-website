import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // const [captchaToken, setCaptchaToken] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message.');
        }
    };

    return (
        <div className="Contact">
            <div className="contact-section">
                <div className="contact-container">
                    <div className="contact-header">
                        <h5 className="contact-title">KONTAKT</h5>
                    </div>
                    <div className="contact-description">
                        <p>If you want to contact me, here are my contact details. Alternatively, you can send a message, and I will respond as soon as possible.</p>
                        <p><a href="mailto:nournassar@hotmail.de">nournassar@hotmail.de</a></p>
                        <p>Tel.: +43 676 3043802</p>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {/* <ReCAPTCHA
                            sitekey="YOUR_RECAPTCHA_SITE_KEY"
                            onChange={(token) => setCaptchaToken(token)}
                        />
                        <button type="submit" disabled={!captchaToken}>Absenden</button> */}
                        <button type="submit">Absenden</button>
                    </form>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/nour-nassar-503b18263/" target="_blank" rel="noopener noreferrer">
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
