declare module 'react-quill' {
    import { Component } from 'react';
  
    interface ReactQuillProps {
      value: string;
      onChange: (html: string) => void;
      modules?: Record<string, any>;
      formats?: string[];
      theme?: string;
      placeholder?: string;
      className?: string;
      style?: React.CSSProperties;
      [key: string]: any; // Allows for additional props
    }
  
    export default class ReactQuill extends Component<ReactQuillProps> {}
  }
  