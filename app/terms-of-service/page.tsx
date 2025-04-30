import { Metadata } from 'next';
import { pageMetadata } from '../metadata';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = pageMetadata['terms-of-service'];

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 28, 2025">
      <p>
        Welcome to Strong Hands, Soft Heart LLC. Please read these Terms of Service ("Terms")
        carefully. By using our website or services, you agree to be bound by them. If you do not
        agree, do not use this site.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using www.stronghandssoftheart.com (the "Site"), you agree to these Terms.
        These Terms govern your access to and use of all content, functionality, and services
        provided by Strong Hands, Soft Heart LLC ("we," "us," or "our").
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All content on this Site — including text, images, logos, symbols, code, and product designs
        — is the property of Strong Hands, Soft Heart LLC unless otherwise stated. You may not
        reproduce, distribute, or create derivative works without our written permission.
      </p>
      <p>You are free to share our public content for non-commercial purposes with credit.</p>

      <h2>3. Permitted Use</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable license to access and use this Site
        for personal, non-commercial purposes. You agree not to:
      </p>
      <ul>
        <li>Modify, reproduce, or resell any content without permission</li>
        <li>Use any content or functionality for unlawful or unauthorized purposes</li>
        <li>
          Attempt to decompile, reverse engineer, or extract source code from any software or
          infrastructure used by this Site
        </li>
        <li>Interfere with or disrupt the operation of the Site or services</li>
      </ul>

      <h2>4. Disclaimer of Warranties</h2>
      <p>
        This Site and its content are provided "as is" and "as available." We make no
        representations or warranties of any kind, express or implied, including:
      </p>
      <ul>
        <li>Fitness for a particular purpose</li>
        <li>Accuracy or reliability of content</li>
        <li>Availability or uptime</li>
      </ul>
      <p>Use of the Site is at your own risk.</p>

      <h2>5. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Strong Hands, Soft Heart LLC and its representatives
        shall not be liable for any indirect, incidental, or consequential damages arising from your
        use of or inability to use the Site — even if advised of the possibility.
      </p>

      <h2>6. Third-Party Services and Tools</h2>
      <p>We rely on several third-party platforms and services to operate this Site, including:</p>
      <ul>
        <li>Vercel – website hosting and deployment</li>
        <li>Google Analytics – site traffic analytics</li>
        <li>Freeform – form submission handling</li>
        <li>Apple iCloud – secure data and asset storage</li>
      </ul>
      <p>
        These services are subject to their own privacy policies and terms. We are not liable for
        issues originating from these third-party platforms.
      </p>

      <h2>7. GDPR and CCPA Notice</h2>
      <p>
        If you are a resident of the European Union or California, you may have rights under
        applicable data privacy laws, including the right to access, correct, or delete your
        personal data. To submit a request, email us at hello@stronghandssoftheart.com.
      </p>
      <p>We honor all valid data rights requests in accordance with local laws.</p>

      <h2>8. External Links</h2>
      <p>
        We may link to other websites or services. These are provided for your convenience, and we
        do not endorse or control their content. Use external sites at your own discretion.
      </p>

      <h2>9. Modifications to Terms</h2>
      <p>
        We may update or revise these Terms at any time. Continued use of the Site after changes are
        posted constitutes your acceptance of the new Terms. We encourage you to review them
        regularly.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by and interpreted in accordance with the laws of the United States
        and the State of Florida. Any disputes shall be resolved exclusively in the state or federal
        courts located in Florida.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        For questions or concerns about these Terms, reach out:
        <br />
        📩 hello@stronghandssoftheart.com
      </p>
    </LegalLayout>
  );
}
