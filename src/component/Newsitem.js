import React from "react";

const Newsitem =(props)=> {
  
    let { title, description, imgUrl, newsUrl, author, date ,source} = props;
    return (
      <div className="card m-2" style={{ width: "18rem" }}>
        
        <img
          src={imgUrl}
          className="card-img-top"
          style={{ height: "8rem" }}
          alt="..."
        />
        <div className="card-body">
        <span className="position-absolute top-0  badge rounded-pill bg-danger"
        style={{right:"0" ,zIndex:"1"}}
        >
          {source}
        </span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              BY {author? author:'Anonymous'} Last updatedP {date?date: "just Now"}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-dark  btn-sm"
          >
            Read more
          </a>
        </div>
      </div>
    );
  
}
export default Newsitem
