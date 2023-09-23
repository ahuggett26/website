import { useEffect, useState } from 'react';
import './Timeline.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TimelineItem from './TimelineItem';

export class InstanceInTime {
  startDate: Date;
  endDate: Date | undefined;
  iconSrc: string; 
  iconBackground: string | undefined;
  iconPadding: boolean;
  mdContents: string;

  constructor(start: Date, end: Date | undefined, icon: string, iconBack: string | undefined, iconPadding: boolean, markdown: string) {
    this.startDate = start;
    this.endDate = end;
    this.iconSrc = icon;
    this.iconBackground = iconBack;
    this.iconPadding = iconPadding;
    this.mdContents = markdown;
  }
}

interface Props {
  instances: InstanceInTime[]
}

const Timeline = (props: Props) => {
  const [activeInstance, setActiveInstance] = useState(0);
  const [instanceMd, setInstanceMd] = useState("");

  function updateMarkdownString(instanceNo: number) {
    const markdown = props.instances[instanceNo].mdContents;
    fetch(markdown).then(res => res.text()).then(text => setInstanceMd(text));
  }

  useEffect(() => {
    updateMarkdownString(0);
  }, [])

  return (
    <div className='timeline-container'>
      <div className='timeline-left-controls'>
        {props.instances.map((instance, index) => 
          <>
            <TimelineItem
              instance={instance} 
              selected={index === activeInstance}
              onClick={() => {
                updateMarkdownString(index);
                setActiveInstance(index);
              }} />
            {index === props.instances.length - 1 ? null :
              <span className='timeline-item-separator'/>
            }
          </>
        )}
      </div>
      <hr/>
      <div className='timeline-right-pane'>
        <ReactMarkdown 
          className="markdown" 
          children={instanceMd}
          remarkPlugins={[remarkGfm]}
          linkTarget="_blank" />
      </div>
    </div>
  );
}

export default Timeline;
