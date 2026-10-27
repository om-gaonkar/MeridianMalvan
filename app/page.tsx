import Link from "next/link";

const highlights = [
  { number: "01", eyebrow: "A place to unwind", title: "Room to breathe.", text: "A comfortable base between the things you came to see and the moments you didn’t plan.", href: "/rooms", link: "Find your stay" },
  { number: "02", eyebrow: "Taste the Konkan", title: "Local at heart.", text: "Discover a coast shaped by seafood traditions, seasonal ingredients, and generous local flavours.", href: "/experiences", link: "Explore experiences" },
  { number: "03", eyebrow: "Out in the open", title: "Follow the blue.", text: "From historic shorelines to fishing villages, let the landscape set the pace for your days.", href: "/location", link: "Explore Malvan" },
];

export default function Home() {
  return (
    <>
      <section className="shell home-hero">
        <div className="hero-copy home-hero-copy">
          <span className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Malvan · Konkan coast · Maharashtra</span>
          <h1 className="serif">Somewhere to <em>slow down.</em></h1>
          <p className="hero-lede">A considered coastal stay for sea-air mornings, local discoveries, and the quiet luxury of having nowhere else to be.</p>
          <div className="hero-actions">
            <Link className="button hero-primary" href="/contact">Plan your stay <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/experiences">Explore the coast <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-footnote"><span className="hero-footnote-line" /> A slower way to experience the Konkan</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" role="img" aria-label="Ocean waves along the Konkan coastline" />
          <div className="hero-image-shade" />
          <div className="hero-image-caption"><span className="caption-kicker">THE WESTERN SHORE</span><span>Salt in the air. Space in the day.</span></div>
          <div className="hero-stamp" aria-hidden="true"><span>STAY</span><span>BY THE</span><strong>SEA</strong><i>✳</i></div>
          <div className="hero-image-index"><span>01</span><span className="index-line" /><span>THE KONKAN</span></div>
        </div>
      </section>

      <section className="intro-band">
        <div className="shell intro-band-inner">
          <span className="eyebrow">Welcome to Meridian Malvan</span>
          <p>Not just somewhere to stay.<br /><em>Somewhere to feel the coast.</em></p>
          <span className="intro-ornament" aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="section home-discover">
        <div className="shell">
          <div className="section-head discover-head">
            <div><span className="eyebrow">Make it your own</span><h2 className="serif">A little closer to <em>what matters.</em></h2></div>
            <p>Come for the coast. Stay for the warmth, local flavours, and the freedom to do as much—or as little—as you like.</p>
          </div>
          <div className="cards home-cards">
            {highlights.map((item) => (
              <article className="card home-card" key={item.number}>
                <div className="home-card-top"><span className="number">{item.number} / 03</span><span className="card-arrow" aria-hidden="true">↗</span></div>
                <span className="eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.href}>{item.link} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-story">
        <div className="shell home-story-grid">
          <div className="story-image-wrap">
            <div className="split-image story-image" role="img" aria-label="A quiet stretch of coastline and sea" />
            <div className="story-image-tag"><span>THE ART OF</span><strong>taking it slow</strong></div>
          </div>
          <div className="split-copy home-story-copy">
            <span className="eyebrow">Your Konkan story</span>
            <h2 className="serif">Leave a little space for <em>the unexpected.</em></h2>
            <p>Maybe it’s the first breeze through an open window. A long lunch that turns into the afternoon. Or a detour that becomes the best part of the trip.</p>
            <p>Let Meridian Malvan be your starting point for discovering the coast in your own way.</p>
            <Link className="button story-button" href="/about">Get to know us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta-image" role="img" aria-label="Sunlight on the sea" />
        <div className="home-cta-overlay" />
        <div className="shell home-cta-content">
          <span className="eyebrow">Your coast-side pause awaits</span>
          <h2 className="serif">The sea is calling.<br /><em>Take your time.</em></h2>
          <p>Tell us when you’re thinking of visiting Malvan and let’s start planning.</p>
          <Link className="button home-cta-button" href="/contact">Make an enquiry <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
