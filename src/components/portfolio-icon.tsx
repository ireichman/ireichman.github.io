interface Props {
  title: string;
  image: string;
  description: string;
  link: string;
  id: string;
}

export default function PortfolioIcon(props: Props) {  
  return (
    <>
      {/* Define spacing for modal icon in home page */}
      <div className="col-md-6 col-lg-4 mb-5">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target={`#${props.id}`}
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <h4 id="email2pdf-title" className="text-center">
            {props.title}
          </h4>
          <img className="img-fluid" src={props.image} alt="..." />
        </div>
      </div>

      {/* Modal pop-up window */}
      <div
        className="portfolio-modal modal fade"
        id={props.id}
        aria-labelledby={props.id}
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
                      {props.title}
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
                      src={props.image}
                      alt={props.title}
                    />
                    {/* Portfolio Modal - Text */}
                    <p id="email2pdf-modal-p" className="mb-4">
                      {props.description}
                    </p>
                    <div>
                      <a
                        className="btn btn-outline-dark btn-social mx-1"
                        href={props.link}
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
    </>
  );
}
