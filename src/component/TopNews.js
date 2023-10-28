import React from "react";
import { Link } from "react-router-dom";

function getFirstCharacters(para) {
  if(para){

    return para.slice(0, 100) + " ...";
  }
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const defaultImage =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

const NewsItem = ({ news }) => {
  return (
    <div className="card m-2 p-1 position-relative " style={{ width: "22rem" }}>
      <div className="card-body ">
        <h6 className="card-title">{news.title}</h6>
        <p className="card-text">{getFirstCharacters(news.description)}</p>
        <a href="/" className="btn main-btn">
          Read more ...
        </a>
      </div>
    </div>
  );
};
const Verical2Card = ({ news, style }) => {
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative ">
      <div className="col p-4 d-flex flex-column position-static ">
        <strong className="d-inline-block mb-2 text-primary-emphasis ">
          <span className="badge bg-danger">
            {capitalizeFirstLetter(news.source_id)}
          </span>
        </strong>
        <h3 className="mb-0">{news.title}</h3>
        <div className="mb-1 text-body-secondary">{news.pubDate}</div>
        <p className="card-text mb-auto">
          {getFirstCharacters(news.description)}
        </p>
        <a
          href={"/"}
          className="icon-link gap-1 icon-link-hover stretched-link"
        >
          Continue reading
          <svg className="bi">
            <use xlinkHref="#chevron-right"></use>
          </svg>
        </a>
      </div>
      <div className="col-auto d-none d-lg-block">
        <svg
          className="bd-placeholder-img"
          width="200"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <image
            href={news.image_url ? news.image_url : defaultImage}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </div>
  );
};
const ImageNewsItem = ({ news }) => {
  return (
    <div className="position-relative">
      <h5>
        {capitalizeFirstLetter(news.source_id)}{" "}
        <span className="badge bg-success">Latest</span>
      </h5>
      <img
        src={news.image_url ? news.image_url : defaultImage}
        className="w-100"
        style={{ height: "420px" }}
        alt=".."
       
      ></img>
      <div
       className="position-absolute bg-dark bg-gradient bg-opacity-75 p-3 text-light w-100"
        style={{ bottom: "0" }}>
        <h5 className="display-6 fst-italic fs-4 ">{news.title}</h5>
        <p className="lead mb-0">
          <Link to={"/newsinfo"} className=" fw-bold text-light">
            Continue reading...
          </Link>
        </p>
      </div>
    </div>
  );
};

const TopNews = ({ topNews }) => {
  //  Top news Components start
  return (
    topNews.length !== 0 && (
      <div>
        <main className="container">
          {/* News 0 */}
          <div className="row p-2 p-md-3 mb-4  rounded text-body-emphasis bg-body-secondary">
            <div className="col-lg-8">
              <ImageNewsItem news={topNews[0]} style={{ height: "420px" }} />
            </div>

            <div className="col-lg-4">
              <div className="p-1 d-flex justify-content-between align-items-center flex-lg-column flex-md-row flex-column">
                {/* News 1 */}
                <NewsItem news={topNews[1]} />
                {/* News 2 */}
                <NewsItem news={topNews[2]} />
              </div>
            </div>
          </div>

          {/* News 3 and News 4 */}
          <div className="row mb-2">
            <div className="col-md-6">
              <Verical2Card news={topNews[3]} />
            </div>
            <div className="col-md-6">
              <Verical2Card news={topNews[4]} />
            </div>
          </div>

          {/* News 5, 6, 7, 8 */}
          <div className="row g-5">
            <div className="col-md-8">
              <div className="row">
                {[5, 6, 7, 8].map((index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="card m-2" style={{ width: "100%" }}>
                      <img
                        src={
                          topNews[index].image_url
                            ? topNews[index].image_url
                            : defaultImage
                        }
                        className="card-img-top"
                        style={{ height: "8rem" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <span
                          className="position-absolute top-0  badge m-1 bg-danger"
                          style={{ left: "0", zIndex: "1" }}
                        >
                          {capitalizeFirstLetter(topNews[index].source_id)}
                        </span>
                        <h5 className="card-title">{topNews[index].title}</h5>
                        <p className="card-text">
                          {getFirstCharacters(topNews[index].description)}
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {topNews[index].pubDate}
                          </small>
                        </p>
                        <a
                          rel="noreferrer"
                          href={"newsUrl"}
                          target="_blank"
                          className="btn main-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Sider */}
            <div className="col-md-4">
              {/* Add your About Sider component here */}
            </div>
          </div>
        </main>
      </div>
    )
  );
};

export default TopNews;
