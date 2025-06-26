import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { SlideNav } from './SlideNav';
import { MemoryRouter } from 'react-router-dom';

// Mock the slideStore for consistent test results
vi.mock('../../slideStore', () => ({
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

describe('SlideNav', () => {
  it('should be hidden by default', () => {
    render(
      <MemoryRouter>
        <SlideNav setOpen={() => {}} />
      </MemoryRouter>,
    );
    // Use queryByRole and check for null, or getByRole with hidden: true
    const nav = screen.getByRole('navigation', { hidden: true });
    expect(nav).toHaveAttribute('aria-label', expect.stringMatching(/slide navigation/i));
    expect(nav).toHaveAttribute('aria-hidden', 'true');
  });

  it('should be visible when open is true', () => {
    render(
      <MemoryRouter>
        <SlideNav open setOpen={() => {}} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('navigation', { name: /slide navigation/i })).toBeVisible();
  });

  it('should call setOpen when a link is clicked', async () => {
    const setOpen = vi.fn();
    render(
      <MemoryRouter>
        <SlideNav open setOpen={setOpen} />
      </MemoryRouter>,
    );

    // Click the first link
    await userEvent.click(screen.getAllByRole('link')[0]);

    expect(setOpen).toHaveBeenCalled();
  });
});
