import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { QuickBar } from './QuickBar';

// Mock the slideStore module
const mockUseHasPrevSlide = vi.fn();
const mockUseHasNextSlide = vi.fn();
const mockPrevSlide = vi.fn();
const mockNextSlide = vi.fn();

vi.mock('../../slideStore', () => ({
  useHasPrevSlide: () => mockUseHasPrevSlide(),
  useHasNextSlide: () => mockUseHasNextSlide(),
  useSlideNav: () => ({ prevSlide: mockPrevSlide, nextSlide: mockNextSlide }),
}));

describe('QuickBar', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockUseHasPrevSlide.mockReset();
    mockUseHasNextSlide.mockReset();
    mockPrevSlide.mockReset();
    mockNextSlide.mockReset();

    mockUseHasPrevSlide.mockReturnValue(false);
    mockUseHasNextSlide.mockReturnValue(true);
  });

  it('should disable the previous button on the first slide', () => {
    mockUseHasPrevSlide.mockReturnValue(false); // Ensure it's the first slide
    render(
      <MemoryRouter>
        <QuickBar setOpen={() => {}} />
      </MemoryRouter>,
    );
    // The first button is the previous button
    expect(screen.getAllByRole('button')[0]).toBeDisabled();
  });

  it('should disable the next button on the last slide', () => {
    mockUseHasNextSlide.mockReturnValue(false); // Ensure it's the last slide
    render(
      <MemoryRouter>
        <QuickBar setOpen={() => {}} />
      </MemoryRouter>,
    );
    // The third button is the next button
    expect(screen.getAllByRole('button')[2]).toBeDisabled();
  });

  it('should call setOpen when the menu button is clicked', async () => {
    const setOpen = vi.fn();
    render(
      <MemoryRouter>
        <QuickBar setOpen={setOpen} />
      </MemoryRouter>,
    );

    await userEvent.click(screen.getByRole('button', { name: /open slide navigator/i }));

    expect(setOpen).toHaveBeenCalled();
  });

  it('should call prevSlide when the previous button is clicked', async () => {
    mockUseHasPrevSlide.mockReturnValue(true); // Enable the previous button
    render(
      <MemoryRouter>
        <QuickBar setOpen={() => {}} />
      </MemoryRouter>,
    );
    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(mockPrevSlide).toHaveBeenCalled();
  });

  it('should call nextSlide when the next button is clicked', async () => {
    mockUseHasNextSlide.mockReturnValue(true); // Enable the next button
    render(
      <MemoryRouter>
        <QuickBar setOpen={() => {}} />
      </MemoryRouter>,
    );
    await userEvent.click(screen.getAllByRole('button')[2]);
    expect(mockNextSlide).toHaveBeenCalled();
  });
});
