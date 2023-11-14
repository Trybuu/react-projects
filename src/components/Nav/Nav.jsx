import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link to={`/`} className="logo-link">
            marek<b>.dev</b>
          </Link>
        </li>
        <li>
          <Link to={`pricing-component`} className="link">
            pricing-component
          </Link>
        </li>
      </ul>
    </nav>
  )
}
