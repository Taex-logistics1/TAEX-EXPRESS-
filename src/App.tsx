
import React from 'react';

const services = [
  {
    number: '01',
    name: 'TAEX Logistics',
    description: 'Parcel, document and business delivery services.',
    status: 'First development phase',
  },
  {
    number: '02',
    name: 'Executive Mobility',
    description: 'Private rides, chauffeur services and airport transfers.',
    status: 'Planned service',
  },
  {
    number: '03',
    name: 'Personal & VIP Escort',
    description: 'Personal travel accompaniment and VIP assistance.',
    status: 'Planned service',
  },
  {
    number: '04',
    name: 'Security Escort',
    description: 'Coordinated security escort arrangements.',
    status: 'Planned service',
  },
  {
    number: '05',
    name: 'Travel & Transfers',
    description: 'Inter-city, interstate and international travel coordination.',
    status: 'Planned service',
  },
];

export default function App() {
  return (
    <main className="app">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark">T</span>
          <span>TAEX</span>
        </a>
        <span className="platform-label">THE ADEDAMOLA EXPRESS</span>
      </header>

      <section className="hero">
        <p className="eyebrow">ONE BRAND. FIVE DIVISIONS.</p>
        <h1>Moving people, parcels and possibilities.</h1>
        <p className="hero-copy">
          One connected platform for logistics, executive mobility,
          personal assistance, security escort and travel services.
        </p>
        <span className="development-label">
          PLATFORM UNDER DEVELOPMENT
        </span>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">OUR SERVICES</p>
          <h2>Explore TAEX</h2>
          <p>Five specialised divisions. One connected experience.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="service-status">{service.status}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <strong>TAEX — THE ADEDAMOLA EXPRESS</strong>
        <p>One company. One platform. Five service divisions.</p>
        <p>© {new Date().getFullYear()} TAEX. All rights reserved.</p>
      </footer>
    </main>
  );
}
