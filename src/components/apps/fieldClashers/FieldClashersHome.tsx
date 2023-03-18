import './FieldClashersHome.scss';
import { Component, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import index from './index.md';

interface State {
  indexMarkdown: string;
}

class FieldClashersHome extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { indexMarkdown: '' };
  }

  async componentDidMount() {
    document.title = "About Field Clashers"
    const indexMdText = await fetch(index).then(res => res.text());
    this.setState({indexMarkdown: indexMdText});
  }

  render() {
    return (
      <div className="field-clashers-home-background">
        <ReactMarkdown 
          className="markdown" 
          children={this.state.indexMarkdown}
          remarkPlugins={[remarkGfm]}
          components={{
            // Disable eslint - it's complaining that the heading doesn't have content, which isn't true 
            // eslint-disable-next-line
            h2: ({node, ...props}) => <h2 id={this.getIdFromReactNode(props.children[0])} {...props}/>,
            // eslint-disable-next-line
            h3: ({node, ...props}) => <h3 id={this.getIdFromReactNode(props.children[0])} {...props}/>
          }} />
      </div>
    );
  }

  getIdFromReactNode(node: ReactNode): string {
    return node!.toString().toLowerCase().replaceAll(" ", "-").replaceAll("&", "");
  }
}

export default FieldClashersHome;
