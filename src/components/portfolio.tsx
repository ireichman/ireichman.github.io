export default function Portfolio() {
    return (
      <>
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            {/* Portfolio Section Heading */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Portfolio
            </h2>
            {/* Icon Divider */}
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-line"></div>
              <div className="divider-custom-line"></div>
            </div>
            {/* Portfolio Grid Items */}
            <div className="row justify-content-center">
              {/* Portfolio Item 1 */}
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal1"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <h4 id="email2pdf-title" className="text-center">
                    Email to PDF
                  </h4>
                  <img
                    className="img-fluid"
                    src="/img/portfolio/email_pdf.png"
                    alt="..."
                  />
                </div>
              </div>
              {/* Portfolio Item 2 */}
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal2"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="/img/portfolio/coming-soon.png"
                    alt="..."
                  />
                </div>
              </div>
              {/* Portfolio Item 3 */}
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal3"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="/img/portfolio/coming-soon.png"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio modals pop-up */}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal1"
          aria-labelledby="portfolioModal1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title */}
                      <h2
                        id="email2pdf-modal-title"
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      >
                        Email to PDF Converter
                      </h2>
                      {/* Icon Divider */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className="img-fluid-portfolio-modal rounded mb-5"
                        src="/img/portfolio/email_pdf.png"
                        alt="Email to PDF"
                      />
                      {/* Portfolio Modal - Text */}
                      <p id="email2pdf-modal-p" className="mb-4">
                        Born of a need to convert email donation receipts to PDF
                        for tax purposes. This nifty script can convert email
                        files (.eml) to PDF. What makes it so useful is the
                        ability to batch convert files and use a naming scheme
                        for the output files. Click the GitHub icon to check it
                        out!
                      </p>
                      <div>
                        <a
                          className="btn btn-outline-dark btn-social mx-1"
                          href="https://github.com/ireichman/email_to_pdf"
                        >
                          <i className="fab fa-fw fa-github"></i>
                        </a>
                      </div>
                      <button
                        id="email2pdf-modal-close-button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 2 */}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal2"
          aria-labelledby="portfolioModal2"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title */}
                      <h2
                        id="coming-soon-modal-2-title"
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      >
                        My Next Project!
                      </h2>
                      {/* Icon Divider */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className="img-fluid-portfolio-modal rounded mb-5"
                        src="/img/portfolio/coming-soon.png"
                        alt="..."
                      />
                      {/* Portfolio Modal - Text */}
                      <p id="coming-soon-modal-2-p" className="mb-4">
                        Coming soon
                      </p>
                      <button
                        id="coming-soon-modal-2-close-button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 3 */}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal3"
          aria-labelledby="portfolioModal3"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title */}
                      <h2
                        id="coming-soon-modal-3-title"
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      >
                        My Next Project!
                      </h2>
                      {/* Icon Divider */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className="img-fluid-portfolio-modal rounded mb-5"
                        src="/img/portfolio/coming-soon.png"
                        alt="..."
                      />
                      {/* Portfolio Modal - Text */}
                      <p id="coming-soon-modal-3-p" className="mb-4">
                        Coming soon
                      </p>
                      <button
                        id="coming-soon-modal-3-close-button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}