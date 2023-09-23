import { useEffect } from 'react';
import './Education.scss';
import Timeline, { InstanceInTime } from '../../common/Timeline';
import adaLogo from '../../../resources/images/education/ada-logo.svg';
import sackvilleLogo from '../../../resources/images/education/sackville-logo.svg';
import degreeMd from './Degree.md';
import secondary from './Secondary.md';

const Education = () => {
  useEffect(() => {
    document.title = "Education - ahuggett.uk"
  })

  const educationInstances = [
    new InstanceInTime(new Date("Oct 2018"), new Date("Nov 2021"), adaLogo, undefined, false, degreeMd),
    new InstanceInTime(new Date("Sep 2011"), new Date("May 2018"), sackvilleLogo, undefined, true, secondary)
  ];
  return (
    <div className='education-container'>
      <Timeline instances={educationInstances} />
    </div>
  );
}

export default Education;
