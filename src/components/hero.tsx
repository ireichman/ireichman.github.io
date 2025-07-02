export default function Hero() {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Masthead Avatar Image */}
        <img
          className="masthead-avatar mb-5"
          src="/img/isreli_avaatar.svg"
          alt="Isreli Reichman picture"
        />
        {/* Masthead Heading */}
        <h1 id="home-h1" className="masthead-heading text-uppercase mb-0">
          Isreli Reichman
        </h1>
        {/* Icon Divider */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-line"></div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Masthead Subheading */}
        <p className="masthead-subheading font-weight-light mb-0">
          <h2 id="home-subtitle">Quality Assurance Engineer</h2>
        </p>
      </div>
    </header>
  );
}
