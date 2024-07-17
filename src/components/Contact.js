import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImLinkedin } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";


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
                        <h5 className="contact-title">CONTACT</h5>
                    </div>
                    <div className="contact-description">
                        <p>If you want to contact me send a message, and I will respond as soon as possible.</p>
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
                        <ImLinkedin className="linkedin" />

                        </a>
                        <a href="https://github.com/Nour-hash/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" /> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
