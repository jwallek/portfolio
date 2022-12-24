import React, {useRef, useState} from 'react'
import './Contact.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { FaTelegramPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { InputGroup } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

function Contact() {

    const[show, setShow] = useState(false)

    const form = useRef();

  
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(process.env.REACT_APP_FORM_A, process.env.REACT_APP_FORM_B, form.current, process.env.REACT_APP_FORM_C)
        .then((result) => {
            console.log(result.text);
            console.log('message sent')
            setShow(true)
            setTimeout(() =>{
              window.location.reload()
            },3000)
        }, (error) => {
            console.log(error.text);
        });
    };

  


  return (
    <div className='contact-container'>
        <div className="contact-title" data-aos="fade-down" data-aos-duration="1500">Let's Connect! <FaTelegramPlane className='connect-icon'/></div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
          <FloatingLabel
            controlId="floatingFName"
            label="First Name"
            className="mb-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Form.Control type="text" placeholder="First name"  className="form-input" name="user_first_name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingLName"
            label="Last Name"
            className="mb-3"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="250"
          >
            <Form.Control type="text" placeholder="Last name"  className="form-input" name="user_last_name"/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email Address"
            className="mb-3"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <Form.Control type="email" placeholder="Email address"  className="form-input" name="user_email"/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextArea"
            label="Message"
            className="mb-3"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="750"
          >
            <Form.Control as="textarea" placeholder="Message" className="form-textarea" name="message"/>
          </FloatingLabel>
          <input type="submit" value="Send" className='form-button' data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1000"/>
          </form>
        </div>
        {show ? <Alert variant="success" onClose={() => setShow(false)} dismissible>Message sent!</Alert> : ''}
    </div>
  )
}

export default Contact