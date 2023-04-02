import './Home.scss';
import Header from './home/Header';

function Home() {
  return (
    <div className='home-container'>
      <Header/>
      <div className="background">
        <h2 className="coming-soon-title">Coming soon</h2>
        <span className="coming-soon-description">
          Thank you for your interest!
          <br/>
          This website is currently in construction but will be up soon.
          <br/>
          <i>(Planned release in early April 2023)</i>
        </span>
      </div>
    </div>
  );
}

export default Home;
