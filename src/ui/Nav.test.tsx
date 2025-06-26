import { render, screen, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Nav } from './Nav';
import { MemoryRouter } from 'react-router-dom';

// Mock the slideStore for consistent test results
vi.mock('../../slideStore', () => ({
  useHasPrevSlide: () => false,
  useHasNextSlide: () => true,
  useSlideNav: () => ({ prevSlide: vi.fn(), nextSlide: vi.fn() }),
  useSlide: () => ({ path: '/', preview: 'Welkom', type: 'slide', view: () => null }),
  useSlides: () => [
    {
      title: 'Welkom & Intro',
      path: '/',
      slides: [
        { path: '/', preview: 'Welkom', type: 'slide', view: () => null },
        { path: '/welkom-intro/goals', preview: 'Goals', type: 'slide', view: () => null },
      ],
    },
  ],
}));

describe('Nav', () => {
  it('should render the QuickBar and SlideNav', async () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
    expect(screen.queryByRole('navigation', { name: /slide navigation/i })).not.toBeInTheDocument();

    const openBtn = screen.getByRole('button', { name: /open slide navigator/i });
    expect(openBtn).toBeInTheDocument();
    await act(() => openBtn.click());

    expect(screen.getByRole('navigation', { name: /slide navigation/i })).toBeInTheDocument();
  });

  it('should open the SlideNav when the menu button is clicked', async () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const menuButton = screen.getByLabelText('Open slide navigator');
    await userEvent.click(menuButton);

    expect(screen.getByRole('navigation', { name: /slide navigation/i })).toBeVisible();
  });
});
