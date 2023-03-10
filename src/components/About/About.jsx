import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  // We need the state and useEffect on this page too to animated the letters on load and hover
  // so that we can pass the letterclass and the state its in to animate them (if 3000ms passed the letters get 'hover' class)
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  })
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            {/* idx means in gsap 1.5sec delay */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my myself one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a ___
            person, ________, a computer fanatic, nature & travel enthusiast,
            and tech-obsessed!!!
          </p>
        </div>
        {/* the rotating cube with skills i posses */}
        <div className="stage-cube-cont">
          {/* will hold 6 sides of the cube with diff icons */}
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f3" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f28c3d" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#264de4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDatabase} color="#727272" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      {/* use loader component from react-loaders for pacman on load, style css in App.scss for global use*/}
      <Loader type="pacman" />
    </>
  )
}

export default About
