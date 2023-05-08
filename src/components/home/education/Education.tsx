import { Component } from 'react';
import './Education.scss';
import Timeline, { InstanceInTime } from '../../common/Timeline';
import adaLogo from '../../../resources/images/education/ada-logo.svg';
import degreeMd from './Degree.md';

class Education extends Component {
  render() {
    const educationInstances = [
      new InstanceInTime(new Date("Oct 2018"), new Date("Nov 2021"), adaLogo, degreeMd)
    ];
    return (
      <div className='education-container'>
        <Timeline instances={educationInstances} />
      </div>
    );
  }
}

export default Education;
