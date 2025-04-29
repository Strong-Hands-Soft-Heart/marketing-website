import { LegalLayout } from '@/components/legal-layout';

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 28, 2025">
      <p>
        Strong Hands, Soft Heart LLC ("we," "our," or "us") is committed to protecting your privacy.
        This policy explains how we collect, use, and safeguard your personal information when you
        visit our website or engage with our offerings.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li>
          Personal Information (e.g., name, email) — when you submit a form or communicate with us
        </li>
        <li>
          Usage Data (e.g., browser type, IP address, device type, pages visited) — collected via
          cookies and analytics tools
        </li>
      </ul>
      <p>We do not knowingly collect data from anyone under 13 years old.</p>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Respond to inquiries or messages</li>
        <li>Share updates, launches, or newsletters you opt into</li>
        <li>Improve our site performance and user experience</li>
        <li>Maintain internal records for operations, legal, or financial purposes</li>
      </ul>
      <p>We do not sell or rent your personal data.</p>

      <h2>3. Third-Party Services We Use</h2>
      <p>To operate effectively, we use the following trusted third-party tools:</p>
      <ul>
        <li>Google Analytics – to understand site usage</li>
        <li>Vercel – to host and deliver our website</li>
        <li>Freeform – to manage form submissions</li>
        <li>Apple iCloud – as part of our secure business infrastructure</li>
      </ul>
      <p>
        These services may collect anonymous technical data via cookies or similar technologies.
        Each provider has its own privacy policies and compliance practices.
      </p>

      <h2>4. Your Rights: GDPR and CCPA Notice</h2>
      <p>
        If you are located in the European Union or California, you may have additional rights under
        local data privacy laws, including:
      </p>
      <ul>
        <li>The right to access or correct your personal data</li>
        <li>The right to request deletion of your data</li>
        <li>The right to object to certain data processing</li>
        <li>The right to data portability (EU only)</li>
        <li>
          The right not to be discriminated against for exercising privacy rights (California only)
        </li>
      </ul>
      <p>To exercise any of these rights, please contact us at hello@stronghandssoftheart.com.</p>
      <p>
        We will respond to all requests in a reasonable timeframe and in accordance with applicable
        laws.
      </p>

      <h2>5. Your Choices</h2>
      <p>You can:</p>
      <ul>
        <li>Request access or deletion of your data at any time</li>
        <li>
          Unsubscribe from communications using the link in our emails or by contacting us directly
        </li>
        <li>Disable cookies via your browser settings</li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect your information.
        However, no method of online transmission or storage is ever 100% secure. Use this site with
        awareness and care.
      </p>

      <h2>7. Cookies and Tracking</h2>
      <p>
        We may use cookies and related tracking technologies to analyze website performance. These
        can usually be disabled in your browser.
      </p>

      <h2>8. Updates to This Policy</h2>
      <p>
        We may update this policy from time to time. If changes are significant, we will post a
        notice on this page.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        📩 hello@stronghandssoftheart.com
        <br />
        If you have any questions or concerns about this policy, your data, or your rights, reach
        out anytime.
      </p>
    </LegalLayout>
  );
}
