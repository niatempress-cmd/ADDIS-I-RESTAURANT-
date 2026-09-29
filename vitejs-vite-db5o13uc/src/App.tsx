import { useState } from 'react';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="site-shell">
      {/* EMBEDDED STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        :root {
          --bg-dark: #020d08;
          --bg-card: #05180f;
          --gold: #d4af37;
          --gold-hover: #b89528;
          --text-light: #e2e8f0;
          --text-muted: #a3b8ac;
          --border-gold: rgba(212, 175, 55, 0.35);
          --border-green: rgba(255, 255, 255, 0.08);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body, .site-shell {
          background-color: var(--bg-dark);
          color: var(--text-light);
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.6;
          min-height: 100vh;
        }

        h1, h2, h3, h4, .brand, .eyebrow {
          font-family: 'Cinzel', serif;
        }

        .site-shell {
          background: radial-gradient(circle at top, #062014 0%, #020d08 70%);
        }

        /* Header */
        .site-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 2rem;
          background: rgba(2, 13, 8, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid var(--border-green);
        }

        .brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #fff;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-text strong {
          letter-spacing: 0.18em;
          font-size: 1.15rem;
          color: var(--gold);
        }

        .brand-text small {
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          color: var(--text-muted);
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .main-nav a {
          color: var(--text-light);
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }

        .main-nav a:hover {
          color: var(--gold);
        }

        .nav-cta {
          background: transparent;
          border: 1px solid var(--gold);
          color: var(--gold);
          padding: 0.5rem 1.25rem;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.3s;
        }

        .nav-cta:hover {
          background: var(--gold);
          color: #000;
        }

        /* Hero */
        .hero {
          position: relative;
          padding: 6.5rem 2rem 5rem;
          text-align: center;
          margin: 0 auto;
          background-image: linear-gradient(
              to bottom,
              rgba(2, 13, 8, 0.7) 0%,
              rgba(2, 13, 8, 0.85) 60%,
              rgba(2, 13, 8, 1) 100%
            ),
            url('https://i.ibb.co/0psWGGVR/EF4-C5-A2-B-3772-43-DA-8-EE8-95-EC7432-F984-2.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          color: var(--gold);
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .hero h1 {
          font-size: 2.35rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #fff;
          margin-bottom: 0.8rem;
          text-shadow: 0 4px 12px rgba(0,0,0,0.8);
        }

        .hero h1 em {
          font-style: normal;
          color: var(--gold);
        }

        .hero-intro {
          font-size: 1rem;
          color: #d1ded6;
          max-width: 540px;
          margin: 0 auto 2.2rem;
          font-weight: 300;
          text-shadow: 0 2px 8px rgba(0,0,0,0.9);
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          align-items: center;
        }

        .button {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.85rem;
          transition: all 0.3s;
        }

        .button-gold {
          background-color: var(--gold);
          color: #020d08;
          font-weight: 600;
        }

        .button-gold:hover {
          background-color: var(--gold-hover);
        }

        .button-outline {
          border: 1px solid var(--gold);
          color: var(--gold);
          background: rgba(2, 13, 8, 0.4);
          backdrop-filter: blur(4px);
        }

        .button-outline:hover {
          background: rgba(212, 175, 55, 0.2);
        }

        /* Marquee */
        .marquee {
          border-top: 1px solid var(--border-green);
          border-bottom: 1px solid var(--border-green);
          padding: 1rem 0;
          display: flex;
          justify-content: center;
          gap: 2rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.02);
        }

        .marquee i {
          color: var(--gold);
          font-style: normal;
        }

        /* Sections */
        .specials, .full-menu, .reserve {
          padding: 5rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-head {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-head h2 {
          font-size: 2.2rem;
          color: #fff;
          margin-top: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .section-head h2 em {
          color: var(--gold);
          font-style: italic;
        }

        .section-note {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* Grid & Cards */
        .dish-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .dish-card {
          background: var(--bg-card);
          border: 1px solid var(--border-green);
          border-radius: 8px;
          overflow: hidden;
          padding: 1.25rem;
          transition: transform 0.3s, border-color 0.3s;
        }

        .dish-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-gold);
        }

        .dish-image {
          position: relative;
          height: 220px;
          margin: -1.25rem -1.25rem 1.25rem -1.25rem;
          overflow: hidden;
          background: #020a06;
        }

        .dish-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .dish-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(2, 13, 8, 0.85);
          color: var(--gold);
          border: 1px solid var(--border-gold);
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          z-index: 2;
        }

        .dish-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.5rem;
        }

        .dish-meta h3 {
          font-size: 1.2rem;
          color: #fff;
        }

        .dish-price {
          color: var(--gold);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .dish-card p {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        /* Menu List */
        .menu-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3.5rem 2.5rem;
          margin-top: 3rem;
        }

        .menu-list-section h3 {
          color: var(--gold);
          font-size: 1.3rem;
          border-bottom: 1px solid var(--border-gold);
          padding-bottom: 0.4rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          gap: 1rem;
        }

        .menu-item h4 {
          color: #fff;
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }

        .menu-item p {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .menu-item strong {
          color: var(--gold);
          font-size: 1rem;
        }

        .sides-box {
          grid-column: 1 / -1;
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid var(--border-gold);
          padding: 1.5rem;
          border-radius: 6px;
          text-align: center;
          margin-top: 1rem;
        }

        .sides-box h3 {
          color: var(--gold);
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
        }

        .sides-box p {
          color: var(--text-light);
          font-size: 0.95rem;
          letter-spacing: 0.05em;
        }

        /* Reserve Box */
        .reserve-inner {
          background: var(--bg-card);
          border: 1px solid var(--border-gold);
          padding: 3.5rem 2rem;
          border-radius: 8px;
          text-align: center;
        }

        .reserve-details {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .reserve-detail strong {
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          display: block;
          margin-bottom: 0.4rem;
        }

        .reserve-detail p {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        /* Footer */
        .site-footer {
          border-top: 1px solid var(--border-green);
          padding: 3rem 2rem;
          text-align: center;
          background: #010805;
        }

        .footer-brand {
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.85rem;
        }

        .footer-links a:hover {
          color: var(--gold);
        }

        .footer-copy {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.75rem;
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 1.8rem; }
          .hero { padding: 4.5rem 1.25rem 3.5rem; }
          .main-nav { display: none; }
          .main-nav.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #020d08;
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-gold);
          }
          .mobile-toggle {
            display: block;
            background: none;
            border: none;
            color: var(--gold);
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="site-header">
        <a href="#" className="brand">
          <span className="brand-text">
            <strong>ADDIS INGLEWOOD</strong>
            <small>ETHIOPIAN & ITALIAN</small>
          </span>
        </a>

        <button className="mobile-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
          ☰
        </button>

        <nav className={`main-nav ${isNavOpen ? 'open' : ''}`}>
          <a href="#specials">Specials</a>
          <a href="#menu">Menu</a>
          <a href="#reserve" className="nav-cta">Reserve Table</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">ETHIOPIAN • ITALIAN KITCHEN & LOUNGE</p>
            <h1>ADDIS <em>INGLEWOOD</em></h1>
            <p className="hero-intro">
              A spirited dining room in the heart of Inglewood, where Ethiopian warmth meets Italian ease.
            </p>
            <div className="hero-actions">
              <a href="#specials" className="button button-gold">Check Specials →</a>
              <a href="#reserve" className="button button-outline">Reserve a table</a>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <span>Slow evenings <i>✦</i> Bold flavors <i>✦</i> Good company <i>✦</i> Inglewood, CA</span>
        </div>

        {/* SPECIALS SECTION */}
        <section id="specials" className="specials">
          <div className="section-head">
            <p className="eyebrow">Chef Specials</p>
            <h2>Three reasons <em>to stay awhile.</em></h2>
            <p className="section-note">An elevated cultural dining experience — from first bite to last sip.</p>
          </div>

          <div className="dish-grid">
            {/* DISH 1: CHICKEN & BEEF TIBS */}
            <article className="dish-card">
              <div className="dish-image">
                <span className="dish-tag">Ethiopian</span>
                <img 
                  src="https://i.ibb.co/v60zhKWY/11f097c0-7ee9-41d0-ae6a-0d4fae5363f4.png" 
                  alt="Chicken and Beef Tibs Special" 
                />
              </div>
              <div className="dish-meta">
                <h3>Chicken & Beef Tibs</h3>
                <span className="dish-price">$23</span>
              </div>
              <p>Chicken or beef sautéed with peppers, onions, herbs, and Ethiopian spices. Served with rice or injera.</p>
            </article>

            {/* DISH 2: CREAMY PASTA */}
            <article className="dish-card">
              <div className="dish-image">
                <span className="dish-tag">Italian</span>
                <img 
                  src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800" 
                  alt="Creamy Chicken Fettuccine Tagliatelle Pasta" 
                />
              </div>
              <div className="dish-meta">
                <h3>Creamy Chicken Pasta</h3>
                <span className="dish-price">$24</span>
              </div>
              <p>Garlic cream sauce, seasoned chicken, parmesan, and fresh herbs tossed with warm pasta.</p>
            </article>

            {/* DISH 3: ETHIOPIAN TEJ / BIRZ */}
            <article className="dish-card">
              <div className="dish-image">
                <span className="dish-tag">Signature Drink</span>
                <img 
                  src="https://i.ibb.co/W4BSYGvH/birz-icon.webp" 
                  alt="Ethiopian Honey Wine Tej / Birz" 
                />
              </div>
              <div className="dish-meta">
                <h3>Ethiopian Honey Wine (Birz)</h3>
                <span className="dish-price">$14</span>
              </div>
              <p>Traditional sweet honey wine brewed with authentic Ethiopian gesho for a smooth, refreshing taste.</p>
            </article>
          </div>
        </section>

        {/* FULL MENU SECTION */}
        <section id="menu" className="full-menu">
          <div className="section-head">
            <p className="eyebrow">From Our Kitchen</p>
            <h2>The full <em>menu.</em></h2>
          </div>

          <div className="menu-list">
            {/* STARTERS */}
            <div className="menu-list-section">
              <h3>Starters</h3>
              <div className="menu-item">
                <div>
                  <h4>Sambusas</h4>
                  <p>Beef or lentil-filled pastries with house dipping sauce.</p>
                </div>
                <strong>$12</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Addis Crispy Cauliflower</h4>
                  <p>Crispy cauliflower with warm spices and signature sauce.</p>
                </div>
                <strong>$13</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Garlic Herb Shrimp</h4>
                  <p>Sautéed shrimp with garlic, lemon, herbs, and light Ethiopian seasoning.</p>
                </div>
                <strong>$17</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Chicken Flatbread</h4>
                  <p>Seasoned chicken, mozzarella, peppers, onions, and house drizzle.</p>
                </div>
                <strong>$18</strong>
              </div>
            </div>

            {/* ENTREES */}
            <div className="menu-list-section">
              <h3>Entrees</h3>
              <div className="menu-item">
                <div>
                  <h4>Chicken Tibs</h4>
                  <p>Chicken sautéed with peppers, onions, herbs, and Ethiopian spices. Served with rice or injera.</p>
                </div>
                <strong>$23</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Sizzling Steak</h4>
                  <p>Seasoned steak with peppers, onions, rosemary, and Ethiopian spices. Served sizzling with rice or injera.</p>
                </div>
                <strong>$27</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Creamy Chicken Pasta</h4>
                  <p>Garlic cream sauce, seasoned chicken, parmesan, and fresh herbs.</p>
                </div>
                <strong>$24</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Shrimp Pasta</h4>
                  <p>Garlic cream pasta with shrimp, parmesan, lemon, and herbs.</p>
                </div>
                <strong>$26</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Whole Fried Fish</h4>
                  <p>Whole seasoned fish served with rice, vegetables, lemon, and house sauce.</p>
                </div>
                <strong>$30</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Vegetarian Plate</h4>
                  <p>Lentils, greens, cabbage, seasonal vegetables, and injera.</p>
                </div>
                <strong>$21</strong>
              </div>
            </div>

            {/* SALADS */}
            <div className="menu-list-section">
              <h3>Salads</h3>
              <div className="menu-item">
                <div>
                  <h4>Addis House Salad</h4>
                  <p>Mixed greens, tomato, cucumber, red onion, herbs, and lemon vinaigrette.</p>
                </div>
                <strong>$14</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Italian Chopped Salad</h4>
                  <p>Romaine, tomato, cucumber, olives, parmesan, and herb vinaigrette.</p>
                </div>
                <strong>$15</strong>
              </div>
            </div>

            {/* DESSERTS & DRINK */}
            <div className="menu-list-section">
              <h3>Desserts & Drinks</h3>
              <div className="menu-item">
                <div>
                  <h4>Baklava</h4>
                  <p>Flaky pastry layered with nuts and honey.</p>
                </div>
                <strong>$10</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Tiramisu</h4>
                  <p>Espresso-soaked layers with mascarpone cream.</p>
                </div>
                <strong>$11</strong>
              </div>
              <div className="menu-item">
                <div>
                  <h4>Ethiopian Honey Wine (Tej / Birz)</h4>
                  <p>Traditional sweet honey wine.</p>
                </div>
                <strong>$14</strong>
              </div>
            </div>

            {/* SIDES */}
            <div className="sides-box">
              <h3>SIDES • $6</h3>
              <p>Injera • Rice • Greens • Cabbage • Seasonal Vegetables</p>
            </div>
          </div>
        </section>

        {/* RESERVE SECTION */}
        <section id="reserve" className="reserve">
          <div className="reserve-inner">
            <p className="eyebrow">Your Table Is Waiting</p>
            <h2>Make an evening <em>of it.</em></h2>
            
            <div className="reserve-details">
              <div className="reserve-detail">
                <strong>Location</strong>
                <p>201 S Market St<br />Inglewood, CA 90301</p>
              </div>
              <div className="reserve-detail">
                <strong>Hours</strong>
                <p>Mon – Sun<br />11:00 AM – 12:00 AM</p>
              </div>
              <div className="reserve-detail">
                <strong>Contact</strong>
                <p>(310) 555-0101<br />Reservations Welcome</p>
              </div>
            </div>

            <a href="tel:3105550101" className="button button-gold">Reserve a table</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <a href="#" className="brand footer-brand">
          <span className="brand-text">
            <strong>ADDIS INGLEWOOD</strong>
          </span>
        </a>

        <div className="footer-links">
          <a href="#specials">Specials</a>
          <a href="#menu">Menu</a>
          <a href="#reserve">Reserve</a>
        </div>

        <p className="footer-copy">
          © 2026 ADDIS INGLEWOOD • Ethiopian & Italian Kitchen • 201 S Market St, Inglewood, CA
        </p>
      </footer>
    </div>
  );
}