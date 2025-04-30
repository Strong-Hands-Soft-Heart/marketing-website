import { render, screen } from '@testing-library/react';
import NotFound from '../app/not-found';

describe('404 Page', () => {
  it('renders the not found message', () => {
    render(<NotFound />);

    // Check for the main heading
    const heading = screen.getByRole('heading', { name: /page not found/i });
    expect(heading).toBeInTheDocument();

    // Check for the descriptive text
    const message = screen.getByText(/the page you're looking for doesn't exist/i);
    expect(message).toBeInTheDocument();
  });
});
