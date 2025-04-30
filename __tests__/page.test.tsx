import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { pageMetadata } from '../app/metadata';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
}));

describe('Home Page', () => {
  it('renders the main content', () => {
    render(<Home />);

    // Test for the presence of the main element
    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();

    // Test for the presence of the header
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('has correct metadata configuration', () => {
    // Test the metadata configuration directly
    expect(pageMetadata.home.title).toBe('Home');
    expect(pageMetadata.home.description).toBe(
      'Discover artisanal craftsmanship that combines strength and heart. Explore our handcrafted goods, learn about our philosophy, and join our journey of creating lasting legacies.'
    );
    expect(pageMetadata.home.openGraph?.title).toBe('Strong Hands, Soft Heart LLC');
  });
});
