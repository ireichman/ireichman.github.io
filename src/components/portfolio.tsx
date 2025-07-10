import PortfolioIcon from "./portfolio-icon";
import { portfolio } from "../DATA_STRINGS"

const portfolioItems = [
  {
    title: "Email to PDF",
    image: "img/portfolio/email_pdf.png",
    description: `Born of a need to convert email donation receipts to PDF for tax purposes. This nifty script can convert email files (.eml) to PDF. What makes it so useful is the ability to batch convert files and use a naming scheme for the output files. Click the GitHub icon to check it out!`,
    link: "https://github.com/ireichman/email_to_pdf",
  },
  {
    title: "Coming soon",
    image: "img/portfolio/coming-soon.png",
    description: "Coming soon",
    link: "#B",
  },
  {
    title: "Coming soon",
    image: "img/portfolio/coming-soon.png",
    description: "Coming soon",
    link: "#C",
  },
];


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