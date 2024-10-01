import { useState } from "react";
import styles from "../styles/Contact.module.css";
 

export default function Contact() {
    const [message, setMessage] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
    };
    return (
      <div className={styles.contact} id="contact">
          <h2 className={styles.title}>Contact.</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" placeholder="Email" />
            <textarea className={styles.textarea} placeholder="Message"></textarea>
            <button className={styles.button} type="submit">Send</button>
            {message && <span className={styles.span}>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
    );
  }