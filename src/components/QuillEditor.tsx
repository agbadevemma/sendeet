import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

export default QuillNoSSRWrapper