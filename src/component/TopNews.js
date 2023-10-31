import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Newsitem from "./Newsitem"
import NewsContext from "./context/context";



function getFirstCharacters(para) {
  if (para) {
    return para.slice(0, 100) + " ...";
  }
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};




const TopNews = ({ topNews }) => {
  //  Top news Components start
  // Calculate the lengths for each new array
  // const totalLength = topNews.length;
  // const length1 = Math.ceil(totalLength / 3);
  // const length2 = Math.ceil((totalLength - length1) / 2);

  // Use array slicing to create three arrays
  // const array1 = topNews.slice(0, length1);
  // const array2 = topNews.slice(length1, length1 + length2);
  // const array3 = topNews.slice(length1 + length2);
  // Move this part outside of the JSX block

  // remainingNews = topNews.slice(19);

  // // Process and display the remaining news outside of JSX
  // while (remainingNews.length) {
  //   currentNews = remainingNews.splice(0, 10);

  //   // Process and display the first 5 elements using Verical2Card
  //   currentNews
  //     .slice(0, 5)
  //     .forEach((element) => <Verical2Card key={element.id} news={element} />);

  //   // Process and display the next 5 elements using NewsCardItem
  //   currentNews
  //     .slice(5, 10)
  //     .forEach((element) => <NewsCardItem key={element.id} news={element} />);
  // }
  const {defaultImage,countWords}=useContext(NewsContext)

  const NewsCardItem = ({ news }) => {
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
  
  const Verical2Card = ({ news }) => {
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
  const ImageNewsCardItem = ({ news }) => {
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
          style={{ bottom: "0" }}
        >
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

  // JSx
  return (
    topNews.length > 10 && (
      <div>
        <main className="container">
          {/* News 0 */}
          <div className="row p-2 p-md-3 mb-4  rounded text-body-emphasis bg-body-secondary">
            <div className="col-lg-8">
              <ImageNewsCardItem news={topNews[0]} style={{ height: "420px" }} />
            </div>

            <div className="col-lg-4">
              <div className="p-1 d-flex justify-content-between align-items-center flex-lg-column flex-md-row flex-column">
                {/* News 1 */}
                <NewsCardItem news={topNews[1]} />
                {/* News 2 */}
                <NewsCardItem news={topNews[2]} />
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
                {[5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
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
              {topNews.slice(12, 19).map((news1) => {
                console.log(news1);
                return <NewsCardItem className="col" key={news1.title} news={news1} />;
              })}
            </div>
          </div>
        
          {/* for remaing news */}
          {/* <div>{remainingNews}</div> */}
          {/* Ensure these adjustments, and if there are any specific errors or
          issues you are encountering, feel free to share more details! */}
        </main>
        <div className="row">
          
                     {topNews.slice(19).map((element) => {
              if (element) {
                return (
                  <div className="col-md-4" key={element.article_id}>
                    <Newsitem
                      title={element.title ? countWords(element.title, 5) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgUrl={
                        element.image_url
                          ? element.image_url
                          : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                      }
                      newsDetail={element}
                      author={element.creator ? element.creator : ""}
                      date={element.pubDate ? element.pubDate : ""}
                      source={
                        element.source_id && element.source_id
                          ? element.source_id
                          : ""
                      }

                      category_path={topNews}
                    />
                  </div>
                );
              } else {
                // Handle the case where 'element' is undefined
                return null;
              }
            })}
            
          </div>
      </div>
    )
  );
};

export default TopNews;
