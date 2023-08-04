import { Component } from 'react';
import './Timeline.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TimelineItem from './TimelineItem';

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
    return (
      <div className='timeline-container'>
        <div className='timeline-left-controls'>
          {this.props.instances.map((instance, index) => 
            <>
              <TimelineItem
                instance={instance} 
                selected={index === this.state.activeInstance}
                onClick={() => {
                  this.updateMarkdownString(index);
                  this.setState({activeInstance: index});
                }} />
              {index === this.props.instances.length - 1 ? null :
                <span className='timeline-item-separator'/>
              }
            </>
          )}
        </div>
        <hr/>
        <div className='timeline-right-pane'>
          <ReactMarkdown 
            className="markdown" 
            children={this.state.instanceMd}
            remarkPlugins={[remarkGfm]}
            linkTarget="_blank" />
        </div>
      </div>
    );
  }
}

export default Timeline;
