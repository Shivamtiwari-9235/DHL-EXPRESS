import { useEffect } from 'react';
import Footer from '../components/Footer';

const articles = [
  {
    title: 'Calculate Custom Duties & Taxes Here For Free!',
    bg: '#e8e0d8',
    emoji: '💻',
    href: 'https://www.dhl.com/in-en/home/our-divisions/express/customs-services.html',
  },
  {
    title: 'How To Optimize Delivery Times for E-Commerce?',
    bg: '#f5e642',
    emoji: '🟡',
    href: 'https://www.dhl.com/discover/en-in/logistics-advice/ecommerce-advice',
  },
  {
    title: 'Fashion E-Commerce Trends in India',
    bg: '#f0c070',
    emoji: '📦',
    href: 'https://www.dhl.com/discover/en-in/logistics-advice/ecommerce-advice',
  },
  {
    title: 'How to optimize your social media strategy to increase sales',
    bg: '#dde8ee',
    emoji: '👥',
    href: 'https://www.dhl.com/discover/en-in/logistics-advice/ecommerce-advice',
  },
];

const ThankYouPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      {/* Header */}
      <header style={{ background: '#FFCC00', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ background: '#D40511', color: '#fff', fontWeight: 900, fontSize: '24px', padding: '3px 10px', letterSpacing: '2px' }}>DHL</span>
          <span style={{ color: '#D40511', fontWeight: 700, fontSize: '13px', letterSpacing: '1px' }}>EXPRESS</span>
        </div>
      </header>

      {/* Hero image banner */}
      <div style={{
        width: '100%',
        height: '200px',
        background: 'linear-gradient(to right, #4a6741, #6e8c5a, #f5c842)',
        backgroundImage: 'url(https://express-resources.dhl.com/rs/903-EZK-832/images/dhl_group_blcvdwliq8_24-11-dhl-09540-service-point-customer-drop-off_small.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* yellow DHL van silhouette area - right side */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%',
          background: 'linear-gradient(to left, rgba(255,200,0,0.4), transparent)',
        }} />
      </div>

      {/* Main content */}
      <div style={{ background: '#f5f5f5', minHeight: '400px', padding: '40px 20px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          {/* Thank you heading */}
          <h2 style={{
            color: '#D40511', fontWeight: 900, fontSize: '22px',
            textTransform: 'uppercase', marginBottom: '14px', lineHeight: '1.3',
          }}>
            Thank You For Your Interest In A<br />DHL Business Account!
          </h2>

          <p style={{ fontSize: '13px', color: '#333', marginBottom: '18px' }}>
            Your form has been submitted and is currently being processed by DHL Express.
          </p>

          {/* Next steps */}
          <p style={{ color: '#D40511', fontSize: '13px', fontWeight: 700, marginBottom: '8px', textDecoration: 'underline' }}>
            Your next steps are:
          </p>
          <ol style={{ paddingLeft: '18px', fontSize: '13px', color: '#333', lineHeight: '2', marginBottom: '32px' }}>
            <li>An international expert will reach out to you within 4 business hours from either +912269103250 or +912235295260.</li>
            <li>You can expect a confirmation email in a few moments. If you do not receive this email, please check your junk folder or reach out to us at 1800 30 345.</li>
            <li>The expert will understand your business needs and offer you a contract.</li>
            <li>A Dedicated Account Manager will be assigned to manage your set up and assist you with your future queries.</li>
          </ol>

          {/* You might also be interested */}
          <p style={{ color: '#D40511', fontSize: '13px', fontWeight: 700, marginBottom: '16px' }}>
            You might also be interested in...
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {articles.map((art, i) => (
              <a key={i} href={art.href} target="_blank" rel="noreferrer"
                style={{
                  width: '160px', textDecoration: 'none', border: '1px solid #ddd',
                  borderRadius: '4px', overflow: 'hidden', background: '#fff',
                  display: 'block', transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{
                  height: '80px', background: art.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '36px',
                }}>
                  {art.emoji}
                </div>
                <p style={{ padding: '8px 10px', fontSize: '12px', color: '#333', lineHeight: '1.4', fontWeight: 600 }}>
                  {art.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThankYouPage;
