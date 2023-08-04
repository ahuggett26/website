import './TimelineItem.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { InstanceInTime } from "./Timeline";


const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }

interface Props {
    instance: InstanceInTime,
    selected: boolean,
    onClick: Function
}

const TimelineItem = (props: Props): JSX.Element => {
    const pointerScss = 'timeline-pointer' + (props.selected ? "-active" : "");
    const iconScss = 'timeline-icon' + (props.selected ? "-active" : "");
    return (
      <>
        {!props.selected ? null : 
            <div className='timeline-dates'>
                {props.instance.startDate.toLocaleDateString("en-GB", dateOptions)}
                &nbsp; - &nbsp;<br/>
                {props.instance.endDate.toLocaleDateString("en-GB", dateOptions)}
            </div>
        }
        
        <div className='timeline-center'>
            <LazyLoadImage 
                src={props.instance.iconSrc} 
                className={iconScss}
                onClick={() => props.onClick()} />
            <span className={pointerScss} />
        </div>
      </>
    )
}

export default TimelineItem;