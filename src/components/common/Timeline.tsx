import { Component } from 'react';
import './Timeline.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export class InstanceInTime {
  startDate: Date;
  endDate: Date;
  iconSrc: string; 
  mdContents: string;

  constructor(start: Date, end: Date, icon: string, markdown: string) {
    this.startDate = start;
    this.endDate = end;
    this.iconSrc = icon;
    this.mdContents = markdown;
  }
}

interface Props {
  instances: InstanceInTime[]
}

interface State {
  activeInstance: number,
  instanceMd: string
}

class Timeline extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { activeInstance: 0, instanceMd: "" }
  }

  async updateMarkdownString(instanceNo: number) {
    const markdown = this.props.instances[instanceNo].mdContents;
    const indexMdText = await fetch(markdown).then(res => res.text());
    this.setState({instanceMd: indexMdText});
  }

  async componentDidMount() {
    document.title = "Education - ahuggett.uk"
    this.updateMarkdownString(0)
  }

  render() {
    const activeTimeInstance = this.props.instances[this.state.activeInstance];
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
    return (
      <div className='timeline-container'>
        <div className='timeline-left-controls'>
          <div className='timeline-dates'>
            {activeTimeInstance.startDate.toLocaleDateString("en-GB", dateOptions)}
            &nbsp; - &nbsp;<br/>
            {activeTimeInstance.endDate.toLocaleDateString("en-GB", dateOptions)}
          </div>
          <div className='timeline-center'>
            <LazyLoadImage src={activeTimeInstance.iconSrc} className="timeline-icon" />
            <span className='timeline-pointer'/>
          </div>
        </div>
        <hr/>
        <div className='timeline-right-pane'>
          <ReactMarkdown 
            className="markdown" 
            children={this.state.instanceMd}
            remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    );
  }
}

export default Timeline;
