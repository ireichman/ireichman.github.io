import Image from "next/image";
import Script from "next/script";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <>
     { /* Navigation */}
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
            <a id ="home-button" className="navbar-brand" href="#page-top">Loading...</a>
            <button id="menu-button" className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><a id="portfolio-button" className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a id="about-button" className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a id="contact-button" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <Hero />

    <Portfolio />
   
    { /* About Section */}
    <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
            { /* About Section Heading */}
            <h2 id="about-title" className="page-section-heading text-center text-uppercase text-white">About</h2>
            { /* Icon Divider */}
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-line"></div>
                <div className="divider-custom-line"></div>
            </div>
            { /* About Section Content */}
            <div className="row">
                <div className="col-lg-4 ms-auto"><p id="about-text-1" className="lead fs-4">As a seasoned QA Automation Engineer, I bring a unique blend of technical prowess and interpersonal skills to the world of software quality assurance. With years of experience in IT, I've developed a comprehensive understanding of networks, systems, and the intricate ways technology serves business needs.
                    My technical toolkit is anchored in Python, where I leverage automation to streamline testing processes and enhance software reliability. Beyond the code, I pride myself on my ability to communicate effectively, bridging the gap between technical complexities and business objectives. I'm not just about finding bugs—I'm about creating solutions that drive business success.</p></div>
                <div className="col-lg-4 me-auto"><p id="about-text-2" className="lead fs-4">When I'm not optimizing test frameworks or collaborating with development teams, you'll find me pursuing my passion for adventure. Whether I'm scaling a rock face, mountain biking through challenging terrain, or exploring new countries, I bring the same sense of precision, curiosity, and enthusiasm to my personal life that I do to my professional work.
                    I thrive on challenges, love continuous learning, and am always excited to tackle complex problems with creativity and technical expertise.</p></div>
            </div>
        </div>
    </section>
    { /* Contact Section */}
    <section className="page-section" id="contact">
        <div className="container">
            { /* Contact Section Heading */}
            <h2 id="contact-me-title" className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            { /* Icon Divider */}
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-line"></div>
                <div className="divider-custom-line"></div>
            </div>
            { /* Contact Section Form */}
            <div className="row justify-content-center">
                <div className="row">
                    <div className="page-section-heading text-center text-uppercase text-secondary mb-0"><p id="contact-me-p" className="lead fs-3">I would love to get in touch! Please contact me on LinkedIn via the link below.</p></div>
                    <div className="container d-flex align-items-center flex-column"><a href="https:{ /*www.linkedin.com/in/isreli-reichman-11a562102"><img src="/img/icons8-linkedin-48.png" /></a></div>
                </div>
            </div>
        </div>
    </section>
    { /* Footer */}
    <footer className="footer text-center">
        <div className="container">
            <div className="row">
                { /* Footer Location */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                </div>
                { /* Footer Social Icons */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 id="footer-title" className="text-uppercase mb-4">Find me online</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/ireichman"><i className="fab fa-fw fa-github"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/isreli-reichman-11a562102"><i className="fab fa-fw fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                </div>
                { /* Footer About Text */}
                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4"></h4>
                </div>
            </div>
        </div>
    </footer>
    { /* Copyright Section */}
    <div className="copyright py-4 text-center text-white">
        <div className="container"><small id="copyrights">Copyright &copy; Isreli Reichman 2025</small></div>
    </div>

    { /* Bootstrap core JS */}
    <Script src="https:{ /*cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    { /* Core theme JS */}
    <Script src="../static/js/scripts.js"/>
    </>
  );
}
