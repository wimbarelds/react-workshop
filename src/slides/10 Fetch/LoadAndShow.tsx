import { ReactNode } from 'react';

interface Props {
  url: string;
  render: (content: string) => ReactNode;
}

export function LoadAndShow({ url, render }: Props) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent);
  }, [url]);

  return render(content);
}
