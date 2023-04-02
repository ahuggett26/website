import { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className='container'>
                <h1 className='title'>ahuggett.uk</h1>
                <h2 className='subtitle'>Software Engineer</h2>
            </header>
        );
    }
}

export default Header;