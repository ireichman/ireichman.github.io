"use client";

export default function Navbar() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a id="home-button" className="navbar-brand" href="#">
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
    );
}
// "use client";

// import { useState } from "react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav
//       className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
//       id="mainNav"
//     >
//       <div className="container">
//         <a id="home-button" className="navbar-brand" href="#">
//           Your Brand Name
//         </a>
//         <button
//           id="menu-button"
//           className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
//           type="button"
//           onClick={toggleMenu}
//           aria-controls="navbarResponsive"
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle navigation"
//         >
//           Menu
//         </button>
//         <div
//           className={`collapse navbar-collapse show`}
//           id="navbarResponsive"
//         >
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item mx-0 mx-lg-1">
//               <a
//                 id="portfolio-button"
//                 className="nav-link py-3 px-0 px-lg-3 rounded"
//                 href="#portfolio"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Portfolio
//               </a>
//             </li>
//             <li className="nav-item mx-0 mx-lg-1">
//               <a
//                 id="about-button"
//                 className="nav-link py-3 px-0 px-lg-3 rounded"
//                 href="#about"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About
//               </a>
//             </li>
//             <li className="nav-item mx-0 mx-lg-1">
//               <a
//                 id="contact-button"
//                 className="nav-link py-3 px-0 px-lg-3 rounded"
//                 href="#contact"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }