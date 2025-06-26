import { renderHook } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { useNavTriggers } from './useNavTriggers';

const nextSlide = vi.fn();
const prevSlide = vi.fn();

vi.mock('../../slideStore', () => ({
  useSlideNav: () => ({ nextSlide, prevSlide }),
}));

describe('useNavTriggers', () => {
  it('should call nextSlide when the right arrow key is pressed', async () => {
    renderHook(() => useNavTriggers());
    await userEvent.keyboard('{arrowright}');
    expect(nextSlide).toHaveBeenCalled();
  });

  it('should call prevSlide when the left arrow key is pressed', async () => {
    renderHook(() => useNavTriggers());
    await userEvent.keyboard('{arrowleft}');
    expect(prevSlide).toHaveBeenCalled();
  });
});
