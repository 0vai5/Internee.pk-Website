import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import Alert from "./alert";
import useAlert from "../hooks/useAlert";



const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ovais",
          from_email: form.email,
          to_email: "rovais53@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        resetForm();
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          resetForm();
        }, 3000);
      })
      .catch((error) => {
        console.error(error);

        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      });
  };
  const resetForm = () => {
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>

      <div className="contactForm">
        {alert.show && <Alert {...alert} />}
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="heading" style={{ textAlign: 'center' }}>
            <span className="strongWord protest-riot-regular">Project</span> in Mind?
            <br />
            <span className="strongWord protest-riot-regular">Contact</span> us
          </h1>

          <input
            type="text"
            placeholder="Your name"
            className="input"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ marginLeft: '0' }}
          />

          <span id="nameError" style={{ color: 'red' }}></span>

          <input
            type="text"
            placeholder="Your email"
            className="input"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ marginLeft: '0' }}
          />
          <span id="emailError" style={{ color: 'red' }}></span>

          <textarea
            placeholder="Your message"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" style={{ backgroundColor: '#43A724' }} disabled={isLoading}>
            {isLoading ? 'Sending..' : 'Send Something'}
          </button>
        </form>
      </div>

      {/* ... Rest of the code remains the same ... */}


      <div className="contactCards">
        <div className="location">
          <div><FontAwesomeIcon icon={faBuilding} /></div>
          <ul style={{ listStyle: 'none', marginLeft: '1rem' }}>
            <li style={{ color: '#8c52fe', fontWeight: 800 }}>Office</li>
            <li>National Incubation Center, Karachi,<br /> Pakistan</li>
          </ul>
        </div>

        <div className="contactEmail">
          <div><FontAwesomeIcon icon={faEnvelope} /></div>

          <ul style={{ listStyle: 'none', marginLeft: '1rem' }}>
            <li style={{ color: '#8c52fe', fontWeight: 800 }}>Email</li>
            <a href="mailto:info@internee.pk">
              <li>info@internee.pk</li>
            </a>
          </ul>
        </div>

        <div className="contactPhone">
          <div><FontAwesomeIcon icon={faPhone} /></div>

          <ul style={{ listStyle: 'none', marginLeft: '1rem' }}>
            <li style={{ color: '#8c52fe', fontWeight: 800 }}>Phone</li>
            <a href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0">
              <li>+92 346 789 1234</li>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0">
              <li>+92 346 789 1234</li>
            </a>
          </ul>
        </div>

        <div className="contactLinkedin">
          <div><FontAwesomeIcon icon={faLinkedinIn} /></div>
          <ul style={{ listStyle: 'none', marginLeft: '1rem' }}>
            <li style={{ color: '#8c52fe', fontWeight: 800 }}>Linkedin</li>
            <a href="https://www.linkedin.com/company/internee-pk/">
              <li className="">Internee - pk</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactForm