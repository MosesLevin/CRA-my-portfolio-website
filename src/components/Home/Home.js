import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './Home.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import AnimatedLogo from './AnimatedLogo/AnimatedLogo'
import Loader from 'react-loaders'

const Home = () => {
  // after animated letters compo we make a useState to define the state of the class of the letter we hover over,
  // since letters can only have one animation at a time running.

  const [letterClass, setLetterClass] = useState('text-animate')

  // we need an array of all the letters we want to animated to be passed as props to animated letters which will animate letter hover

  const nameArray = ['o', 's', 'e', 's']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  // useEffect to set the letter class to different class name on hover
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  })

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* manually animate the beginning, */}
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <img src={LogoTitle} alt="developer" />
            {/* after making the array we can import our animated letters and pass the letters we want to animate in array as props */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              // we set the index to 15
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>Fullstack Developer / Javascript enthusiast / Project Manager</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <AnimatedLogo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
