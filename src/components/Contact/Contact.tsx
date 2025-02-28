import { IonIcon } from '@ionic/react';
import Navbar from '../Navbar/Navbar';
import './contact.css';
import { paperPlane } from 'ionicons/icons';

const Contact = () => {
    return (
      <article className="contact" data-page="contact">
  
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
  
        <section className="mapbox" data-mapbox>
          <figure>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8587.157038218884!2d18.286976099999998!3d57.636157799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46f5cbb5c38c7b6d%3A0x400fef341e41c20!2sVisby%2C%20Sweden!5e0!3m2!1sen!2s!4v1719652130163!5m2!1sen!2s"
  width="400"
  height="300"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </figure>
        </section>
  
        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>
  
          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required
              />
              <input
              type='email'
                name="email"
                className="form-input"
                placeholder="Email"
                required
              />
            </div>
            <textarea name="message" className="form-input" placeholder="Your Message" required ></textarea>
            <button className="form-btn" type="submit">
            <IonIcon icon={paperPlane} />
              <span>Send Message</span>
            </button>
          </form>
        </section>
        <Navbar />
  
      </article>
    );
  };
  
  export default Contact;
  