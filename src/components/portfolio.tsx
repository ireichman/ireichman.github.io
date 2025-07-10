import PortfolioIcon from "./portfolio-icon";
import { portfolio } from "../DATA_STRINGS"

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
              { portfolio.map(
                (item, index) => (
                    <PortfolioIcon
                        id={`portfolioModal${index}`}
                        key={index}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        image={item.image} />
                )) }
            </div>
          </div>
        </section>
      </>
    );
}