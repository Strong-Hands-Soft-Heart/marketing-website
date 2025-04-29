import { LegalLayout } from '@/components/legal-layout';

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 28, 2025">
      <p>
        Strong Hands, Soft Heart LLC ("we," "our," or "us") is committed to protecting your privacy.
        This policy explains how we collect, use, and safeguard your personal information when you
        use our website or interact with us.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li>
          Personal Information (e.g., name, email) — when you fill out a contact form or sign up for
          updates
        </li>
        <li>
          Usage Data (e.g., browser type, pages visited) — collected via cookies and analytics tools
        </li>
      </ul>
      <p>We do not knowingly collect data from anyone under 13 years old.</p>

      <h2>2. How We Use It</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Respond to messages or inquiries</li>
        <li>Improve our website and user experience</li>
        <li>Share updates about new products, projects, or content</li>
        <li>Maintain internal records (for operational or legal reasons)</li>
      </ul>
      <p>We don't sell or rent your data. Ever.</p>

      <h2>3. Sharing of Information</h2>
      <p>We only share your data:</p>
      <ul>
        <li>
          With trusted service providers (like web hosts or email services) under confidentiality
        </li>
        <li>If required by law, legal process, or to protect our rights</li>
      </ul>

      <h2>4. Your Choices</h2>
      <p>You can:</p>
      <ul>
        <li>Request access to your personal data</li>
        <li>Ask us to delete your data</li>
        <li>
          Unsubscribe from any email list using the link in the footer or by emailing us directly
        </li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to protect your data.
        However, no system is 100% secure — use the internet mindfully.
      </p>

      <h2>6. Cookies</h2>
      <p>
        We may use cookies to analyze site traffic and improve performance. You can disable cookies
        in your browser settings if you prefer.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. If we make significant changes, we'll post a
        clear notice here.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have questions or concerns about your data, contact:
        <br />
        📩 hello@stronghandssoftheart.com
      </p>
    </LegalLayout>
  );
}
