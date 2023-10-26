import React from "react";
import { useLocation } from "react-router-dom";
import NewsItem from "./Newsitem";

const NewsDetail = () => {
  const location = useLocation();
  const news = location.state;
  function countWords(paragraph, getWords) {
    // Split the paragraph into words
    const words = paragraph.split(/\s+/);

    // Count the total number of words
    const wordCount = words.length;

    // Return the first 40 words
    if (wordCount <= getWords) {
      return words.join(" ");
    } else {
      return words.slice(0, getWords).join(" ");
    }
  }
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const defaultImage =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

  console.log("Deatil==>", news);
  return (
    <main className="container mb-5">
      <div className="row g-3">
        <div className="col-lg-9">
          <div className="">
            <h3 className="badge bg-success">
              {news.category}
              
            </h3>
            <img
              src={news.image_url ? news.image_url : defaultImage}
              className="w-100"
              style={{ height: "480px" }}
              alt=".."
            ></img>
            <h2 className="mt-3 display-6 fst-italic">{news.title}</h2>
            <p>{news.pubDate}<span className="ms-3 text-bold">{news.country}</span> </p>
            <div><i className="bi bi-person-fill"></i> <span>{news.creator?news.creator:"Anonyms"}</span></div>
            <p className="text-emphasis lh-3 fs-4 my-3 ">{news.description}</p>
          
          </div>
        </div>

        {/* About Sider */}
        <div className="col-lg-3 mt-5" >
   
   <div className="card  p-3   position-relative" >
    <h3 className="text-underline text-danger">Relative News</h3>
    <div className="d-lg-flex gap-2">

      <img src={defaultImage} className="img-fluid d-inline" alt=".." style={{ width: "35%" }}/>
     <h6 className="card-title text-success">{countWords(news.title,7)}</h6>
    </div>
     <p className="card-text">{countWords(news.description,10)}</p>
    
   </div>
 </div>
      </div>
    </main>
  );
};

export default NewsDetail;
