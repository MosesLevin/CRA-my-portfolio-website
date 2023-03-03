import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={LogoSub} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/moseslevin/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MosesLevin"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faDiscord} color="#4d4d4d" />
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4d" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
