import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-title">
            <Link to='/'>#VANLIFE</Link>
        </div>
        <div className="nav-items">
            <div className="item">
                <Link to='/about'>About</Link>
            </div>
            <div className="item">
                <Link to='#'>Vans</Link>
            </div>
            <div className="item">
                <Link to='/login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar