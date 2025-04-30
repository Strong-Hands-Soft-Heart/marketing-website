import { render, screen } from '@testing-library/react';
import PrivacyPolicyPage from '../app/privacy-policy/page';
import TermsOfServicePage from '../app/terms-of-service/page';

describe('Legal Pages', () => {
  describe('Privacy Policy Page', () => {
    it('renders the privacy policy content', () => {
      render(<PrivacyPolicyPage />);

      // Check for the main heading
      const heading = screen.getByRole('heading', { name: /privacy policy/i });
      expect(heading).toBeInTheDocument();

      // Check for key content using a more specific selector
      const introText = screen.getByText(/is committed to protecting your privacy/i);
      expect(introText).toBeInTheDocument();
    });
  });

  describe('Terms of Service Page', () => {
    it('renders the terms of service content', () => {
      render(<TermsOfServicePage />);

      // Check for the main heading
      const heading = screen.getByRole('heading', { name: /terms of service/i });
      expect(heading).toBeInTheDocument();

      // Check for key content using a more specific selector
      const introText = screen.getByText(/please read these terms of service/i);
      expect(introText).toBeInTheDocument();
    });
  });
});
