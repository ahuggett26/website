import './FieldClashersHome.scss';
import { ReactNode, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import index from './index.md';

const FieldClashersHome = () => {
  const [indexMarkdown, setIndexMarkdown] = useState('');

  useEffect(() => {
    document.title = "About Field Clashers";
    fetch(index).then(res => res.text()).then(text => setIndexMarkdown(text));
  }, []);

  return (
    <div className="field-clashers-home-background">
      <ReactMarkdown 
        className="markdown" 
        children={indexMarkdown}
        remarkPlugins={[remarkGfm]}
        components={{
          // Disable eslint - it's complaining that the heading doesn't have content, which isn't true 
          // eslint-disable-next-line
          h2: ({node, ...props}) => <h2 id={getIdFromReactNode(props.children[0])} {...props}/>,
          // eslint-disable-next-line
          h3: ({node, ...props}) => <h3 id={getIdFromReactNode(props.children[0])} {...props}/>
        }} />
    </div>
  );

  function getIdFromReactNode(node: ReactNode): string {
    return node!.toString().toLowerCase().replaceAll(" ", "-").replaceAll("&", "");
  }
}

export default FieldClashersHome;
