import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <Link
              onClick={scrollUp}
              className="btn btn-outline-light btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            {/* Twitter */}
            <Link
              onClick={scrollUp}
              className="btn btn-outline-light btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            {/* Google */}
            <Link
              onClick={scrollUp}
              className="btn btn-outline-light btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fab fa-google"></i>
            </Link>

            {/* Instagram */}
            <Link
              onClick={scrollUp}
              className="btn btn-outline-light btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            {/* Linkedin */}
            <Link
              onClick={scrollUp}
              className="btn btn-outline-light btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>

            {/* Github */}
            <Link
              onClick={scrollUp}
              className="btn btn-outline-light btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fab fa-github"></i>
            </Link>
          </section>
          {/* Section: Social media */}

          {/* Section: Form */}
          <section className="">
            <form action="">
              {/*Grid row*/}
              <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-md-5 col-12">
                  {/* Email input */}
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-auto">
                  {/* Submit button */}
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </form>
          </section>
          {/* Section: Form */}

          {/* Section: Text */}
          <section className="mb-4">
            <p>
              Welcome to Sar News! By subscribing to our news service, you open
              the door to a world of the latest updates and breaking news. Stay
              ahead of the curve by becoming a part of our community, where
              staying informed is as easy as a simple subscription. Explore the
              dynamic landscape of news with Sar News, your go-to source for the
              latest happenings and updates.
            </p>
          </section>
          {/* Section: Text */}

          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>Star News
              </h6>
              <p>
                We are dedicated to keeping you informed and engaged with the
                most relevant and timely information.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">News Latest</h6>
              <p>
                <Link onClick={scrollUp} to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link onClick={scrollUp} to="/business" className="text-reset">
                  Business
                </Link>
              </p>
              <p>
                <Link
                  onClick={scrollUp}
                  to="/entertainment"
                  className="text-reset"
                >
                  Entertainment
                </Link>
              </p>
              <p>
                <Link onClick={scrollUp} to="/food" className="text-reset">
                  Food
                </Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">News Support</h6>
              <p>
                <Link onClick={scrollUp} to="/sports" className="text-reset">
                  Sports
                </Link>
              </p>
              <p>
                <Link onClick={scrollUp} to="/science" className="text-reset">
                  Science
                </Link>
              </p>
              <p>
                <Link onClick={scrollUp} to="/" className="text-reset">
                  Latest
                </Link>
              </p>
              <p>
                <Link onClick={scrollUp} to="/" className="text-reset">
                  Help
                </Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary"></i> Pakistan,
                Karachi
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                info@starnews.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i> + 92 335
                13326 45
              </p>
              <p>
                <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <Link onClick={scrollUp} className="text-white" to="/">
            {" "}
            sameersultan1001@gmail.com
          </Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
