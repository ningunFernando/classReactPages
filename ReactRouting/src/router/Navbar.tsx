import {Link} from 'react-router-dom'
import "../nav.css"


const Navbar = () => {
  return (
    <>
      <ul>
        <li><Link to={"/home"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/content"}>Content</Link></li>
      </ul>
    </>
  )
}

export default Navbar
