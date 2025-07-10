export default function Footer() {
    return (
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
              <a className="btn btn-outline-light btn-social mx-1" href="#">
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
    );
}