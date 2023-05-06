import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import './Home.scss';
import Header from './header/Header';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <Header/>
        <div className='home-page-contents'>
          <Outlet/>
        </div>
      </div>
    );
  }
}

export default Home;
