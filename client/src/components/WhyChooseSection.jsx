const benefits = [
  {
    number: '1',
    title: 'Doorstep Pickup from over 750 cities in India',
    emoji: '🚛',
    description:
      "What's more? Our TAPA Certification ensures highest shipment security!",
  },
  {
    number: '2',
    title: 'Unbelievable Transit Time & Connectivity',
    emoji: '📦',
    description:
      'Over 30% of buyers globally demand express deliveries & you can reach them in 2-5 business days!',
  },
  {
    number: '3',
    title: "Flexible Deliveries so that you don't have to worry",
    emoji: '📱',
    description:
      'Your buyers have 6 delivery options so that we can reach your product – Right First Time!',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="why-section">
      <h2 className="section-heading">
        Why Choose DHL Express As Your<br />Logistics Service Provider?
      </h2>
      <div className="cards-row">
        {benefits.map((b) => (
          <div className="benefit-card" key={b.number}>
            <div className="number-circle">{b.number}</div>
            <p className="card-title">{b.title}</p>
            <div className="card-image">
              <span style={{ fontSize: '52px' }}>{b.emoji}</span>
            </div>
            <p className="card-desc">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
