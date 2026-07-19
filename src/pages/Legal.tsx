import { PageHero } from '../components/UI';

export function Privacy() {
  return <>
    <PageHero eyebrow="LEGAL" title="Privacy policy" text="This starter policy should be reviewed and approved for your business and the markets you serve." />
    <section className="section"><div className="container legal">
      <h2>Information we collect</h2>
      <p>We may collect information submitted through enquiry and application forms, including names, contact details, company details and messages.</p>
      <h2>Website analytics</h2>
      <p>We use Google Analytics to understand how visitors use this website. Analytics may collect information such as pages visited, interactions, device and browser details, approximate location and referring websites. This information helps us evaluate website performance and improve our services.</p>
      <h2>How information is used</h2>
      <p>Information is used to respond to enquiries, evaluate business opportunities, understand website usage and improve website service.</p>
      <h2>Contact</h2>
      <p>Contact the company using the details shown on the website for privacy-related questions.</p>
    </div></section>
  </>;
}

export function Terms() {
  return <>
    <PageHero eyebrow="LEGAL" title="Terms and conditions" text="A starter page that should be reviewed against your final services and jurisdiction." />
    <section className="section"><div className="container legal">
      <h2>Website use</h2><p>Website information is provided for general business communication and may be updated without notice.</p>
      <h2>Product information</h2><p>Availability, specifications, pack sizes and commercial terms must be confirmed directly with the company.</p>
      <h2>Intellectual property</h2><p>Company names, branding and approved media remain the property of their respective owners.</p>
    </div></section>
  </>;
}
