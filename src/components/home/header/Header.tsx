import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container'>
            <h1 className='title'>ahuggett.uk</h1>
            <nav className='tabs-holder'>
                <ul className='tabs'>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;