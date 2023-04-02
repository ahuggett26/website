import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import './Home.scss';
import Header from './home/Header';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <Header/>
        <Outlet/>
      </div>
    );
  }
}

export default Home;
