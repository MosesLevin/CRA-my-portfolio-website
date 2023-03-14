import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'
import emailjs from '@emailjs/browser'

// like all components with animated letters we need the useEffect and the state to change the class on hover animation

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  // the function recieves the onSubmit method and we send to emailJS
  const sendEmail = (recievedSubmitPressEvent) => {
    recievedSubmitPressEvent.preventDefault()

    // send an email :
    // emailjs syntax in their documentation, recieves arguments in order, service_id, template_id, form reference, user_token
    emailjs
      .sendForm(
        'gmail',
        'template_ykpnxx2',
        refForForm.current,
        'g5ZgU51e7XgcCzYhR'
      )
      .then(
        () => {
          alert('Message successfuly sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            {/* use animated letters again with Contact me passed to it, with a 1.5s delay (idx) and after copying the state and effect
            we can pass our current state (initial before hover) state to the animated letters*/}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Whether you have a job offer or simply want to chat about coding and
            web development, I am always happy to connect with fellow
            professionals. Use the contact form below to get in touch and start
            a conversation.
          </p>
          <div className="contact-form">
            <form ref={refForForm} onSubmit={sendEmail}>
              <ul className="contact-ul">
                {/* <li className="form-flex"> */}
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  {/* </li> */}
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="Subject"
                    required
                    style={{ width: '100%' }}
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
