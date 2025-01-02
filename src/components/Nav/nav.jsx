import './nav.css';
import logo from '../../assets/logo.png';

function Nav(){
    return(
        <nav>
            <div className='nav-left'>
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
            <div className='nav-center'>
                <img src={logo} />
            </div>
            <div className='nav-right'>

            </div>
        </nav>
    )
}

export default Nav;