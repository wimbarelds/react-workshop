import { Prose } from '../shared/Prose';
import { useSlide } from '../slideStore';

export function Placeholder() {
  const slide = useSlide();
  return (
    <Prose>
      <h1>{slide.preview}</h1>
    </Prose>
  );
}
