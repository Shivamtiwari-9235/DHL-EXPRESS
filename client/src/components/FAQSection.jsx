import { useState } from 'react';

const faqs = [
  {
    q: 'How many Countries Does DHL Express India serve?',
    a: 'DHL Express India serves over 220 countries and territories worldwide, making it one of the most extensive express delivery networks globally.',
  },
  {
    q: 'Does DHL Express India assist with filing shipments with customs?',
    a: 'Yes, DHL Express India has dedicated customs experts who assist with all customs documentation and filing processes to ensure smooth clearance of your shipments at every destination.',
  },
  {
    q: 'Does DHL Express India Offer Pickup Services?',
    a: 'Yes, DHL Express India offers doorstep pickup services from over 750 cities across India, ensuring convenient collection directly from your location.',
  },
  {
    q: 'Is Packaging Material Free at DHL Express?',
    a: 'DHL Express provides free packaging material for documents. For parcels, packaging material can be purchased at a DHL Service Point, or you are welcome to use your own packaging.',
  },
  {
    q: 'What is the standard transit time for my international shipments?',
    a: 'Standard transit time for international shipments is typically 2–5 business days depending on the destination country and service selected.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <div className="faq-item" key={i}>
            <div
              className="faq-question"
              onClick={() => toggle(i)}
              role="button"
              aria-expanded={openIndex === i}
            >
              <span className="faq-q-text">{faq.q}</span>
              <span className={`faq-arrow${openIndex === i ? ' open' : ''}`}>
                &#8964;
              </span>
            </div>
            <div className={`faq-answer${openIndex === i ? ' open' : ''}`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
