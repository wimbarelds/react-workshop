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

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest('main, [data-background]')) return;
      if (e.pageX > window.innerWidth / 2) nextSlide();
      else prevSlide();
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [prevSlide, nextSlide]);
}
