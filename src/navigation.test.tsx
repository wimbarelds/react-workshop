import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

describe('Navigation', () => {
  it('should navigate to the next slide when the user presses the right arrow key', async () => {
    render(<RouterProvider router={router} />);

    // Initially, we are on the "Welkom" slide
    expect(screen.getByRole('heading', { name: /welkom/i })).toBeInTheDocument();

    // Simulate the user pressing the right arrow key
    await userEvent.keyboard('{arrowright}');

    // Now, we should be on the "Agenda" slide
    expect(screen.getByText(/Agenda/i)).toBeInTheDocument();
  });
});
