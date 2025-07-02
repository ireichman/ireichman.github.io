// import Image from "next/image";
import Script from "next/script";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a id="home-button" className="navbar-brand" href="#page-top">
            Loading...
          </a>
          <button
            id="menu-button"
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  id="portfolio-button"
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  id="about-button"
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  id="contact-button"
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Hero />

      <Portfolio />

      <About />

      <Contact />

      {/* Footer */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location */}
            <div className="col-lg-4 mb-5 mb-lg-0"></div>
            {/* Footer Social Icons */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 id="footer-title" className="text-uppercase mb-4">
                Find me online
              </h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://github.com/ireichman"
              >
                <i className="fab fa-fw fa-github"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/isreli-reichman-11a562102"
              >
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-dribbble"></i>
              </a>
            </div>
            {/* Footer About Text */}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4"></h4>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright Section */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small id="copyrights">Copyright &copy; Isreli Reichman 2025</small>
        </div>
      </div>

      {/* Bootstrap core JS */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      {/* Core theme JS */}
      <Script src="/JS/scripts.js" />
    </>
  );
}
