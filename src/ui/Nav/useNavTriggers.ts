import { useEffect } from 'react';
import { useSlideNav } from '../../slideStore';

export function useNavTriggers() {
  const { nextSlide, prevSlide } = useSlideNav();

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [nextSlide, prevSlide]);
}
