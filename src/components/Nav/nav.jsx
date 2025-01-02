import './nav.css';
import logo from '../../assets/logo.png';
import { FaInstagram } from "react-icons/fa";

function Nav(){
    return(
        <nav>
            <div className='nav-container nav-left'>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/archive'>Archive</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                </ul>
            </div>
            <div className='nav-container  nav-center'>
                <img id='nav-logo' src={logo} alt='ChureThing logo, states ChureThing in a vintage-style serif black font with overlapping cream and magenta trapezoids surrounding it. There are bubbles and stars in a 50s style look.' />
            </div>
            <div className='nav-container  nav-right'>
                <FaInstagram className='nav-icon' />
            </div>
        </nav>
    )
}

export default Nav;