import React from "react";
import { useNavigate } from "react-router-dom";

const NewsItem = (props) => {
  const { title, description, imgUrl, newsDetail, author, date, source } = props;
  const navigate = useNavigate();

  const navigateToNewsDetail = () => {
    // Use navigate to go to the "/newsinfo" route and pass the newsDetail as state

    // const ti="check"
    console.log(newsDetail)
    navigate("/newsinfo", { state: newsDetail  });
  };
  
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        src={imgUrl}
        className="card-img-top"
        style={{ height: "8rem" }}
        alt="..."
      />
      <div className="card-body">
        <span
          className="position-absolute top-0  badge rounded-pill bg-danger"
          style={{ right: "0", zIndex: "1" }}
        >
          {source}
        </span>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            BY {author ? author : "Anonymous"} Last updatedP {date ? date : "just Now"}
          </small>
        </p>

        <button
          onClick={navigateToNewsDetail}
          className="btn btn-success btn-sm"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
