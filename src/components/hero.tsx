import Image from "next/image";

export default function Hero() {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Masthead Avatar Image */}
        <Image
          className="masthead-avatar mb-5"
          src="/img/isreli_avaatar.svg"
          alt="Isreli Reichman picture"
          width={150}  
          height={150} 
          priority={true} // faster load?
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
        <h2 id="home-subtitle" className="masthead-subheading font-weight-light mb-0">
          Quality Assurance Engineer
        </h2>
      </div>
    </header>
  );
}

//fixed image issue, nested properly h2