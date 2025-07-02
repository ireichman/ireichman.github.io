export default function About() {
    return (
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          {/* About Section Heading */}
          <h2
            id="about-title"
            className="page-section-heading text-center text-uppercase text-white"
          >
            About
          </h2>
          {/* Icon Divider */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-line"></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* About Section Content */}
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p id="about-text-1" className="lead fs-4">
                {`As a seasoned QA Automation Engineer, I bring a unique blend of
                technical prowess and interpersonal skills to the world of
                software quality assurance. With years of experience in IT, I've
                developed a comprehensive understanding of networks, systems,
                and the intricate ways technology serves business needs. My
                technical toolkit is anchored in Python, where I leverage
                automation to streamline testing processes and enhance software
                reliability. Beyond the code, I pride myself on my ability to
                communicate effectively, bridging the gap between technical
                complexities and business objectives. I'm not just about finding
                bugs—I'm about creating solutions that drive business success.`}
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p id="about-text-2" className="lead fs-4">
                {`When I'm not optimizing test frameworks or collaborating with
                development teams, you'll find me pursuing my passion for
                adventure. Whether I'm scaling a rock face, mountain biking
                through challenging terrain, or exploring new countries, I bring
                the same sense of precision, curiosity, and enthusiasm to my
                personal life that I do to my professional work. I thrive on
                challenges, love continuous learning, and am always excited to
                tackle complex problems with creativity and technical expertise.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}