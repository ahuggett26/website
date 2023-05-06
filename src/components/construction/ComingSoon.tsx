import { Component } from 'react';
import './ComingSoon.scss';

class ComingSoon extends Component {
    componentDidMount() {
        document.title = "ahuggett.uk"
    }

    render() {
        return (
            <div className='construction-container'>
                <div className="construction-info">
                    <h2 className="coming-soon-title">Coming soon</h2>
                    <div className='construction-emoji'>🏗️</div>
                    <div className="coming-soon-description">
                        Thank you for your interest!
                        <br/>
                        This section of the website is currently in construction but will be up soon.
                        <br/>
                    </div>
                </div>
                <div className='construction-background'/>
            </div>
        );
    }
}

export default ComingSoon;