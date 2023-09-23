import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>ahuggett.uk</h1>
            <nav className={styles['tabs-holder']}>
                <ul className={styles.tabs}>
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