export default function Contact() {
    return (
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
                    <div className="container d-flex align-items-center flex-column"><a href="https://www.linkedin.com/in/isreli-reichman-11a562102"><img src="/img/icons8-linkedin-48.png" /></a></div>
                </div>
            </div>
        </div>
    </section>
    )
}