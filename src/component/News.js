import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import TopNews from './TopNews'
import axios from "axios";


// import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";

const News=()=> {
  const [topnews, settopnews] = useState([]);
  const [businessnews, setbusinessnews] = useState([]);
  const [entertainmentnews, setentertainmentnews] = useState([]);
  const [foodnews, setfoodnews] = useState([]);
  const [healthnews, sethealthnews] = useState([]);
  const [sportsnews, setsportsnews] = useState([]);
  const [sciencenews, setsciencenews] = useState([]);
  const [news, setnews] = useState([]);
  const location = useLocation()
  useEffect(() => {
    console.log("mylocation",location.pathname)

    const fetchData = async () => {
      try {
        const category = location.pathname.slice(1);
        console.log(category);
        let fetchedNews = [];
  
        switch (category) {
          case 'business':
            if (businessnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(category);
              setbusinessnews(fetchedNews);
            } else {
              fetchedNews = businessnews;
            }
            break;
          case 'entertainment':
            if (entertainmentnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(category);
              setentertainmentnews(fetchedNews);
            } else {
              fetchedNews = entertainmentnews;
            }
            break;
          case 'food':
            if (foodnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(category);
              setfoodnews(fetchedNews);
            } else {
              fetchedNews = foodnews;
            }
            break;
          case 'health':
            if (healthnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(category);
              sethealthnews(fetchedNews);
            } else {
              fetchedNews = healthnews;
            }
            break;
          case 'sports':
            if (sportsnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(category);
              setsportsnews(fetchedNews);
            } else {
              fetchedNews = sportsnews;
            }
            break;
          case 'science':
            if (sciencenews.length === 0) {
              fetchedNews = await fetchNewsByCategory(category);
              setsciencenews(fetchedNews);
            } else {
              fetchedNews = sciencenews;
            }
            break;
          default:
            if (topnews.length === 0) {
              fetchedNews = await fetchNewsByCategory("top");
              settopnews(fetchedNews);
            } else {
              fetchedNews = topnews;
            }

            break;
        }
  
        setnews(fetchedNews);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };
  
    fetchData();
  }, [location]);
  
  const fetchNewsByCategory = async (category) => {
    try {
      const response = await axios.get(`https://newsdata.io/api/1/news?apiKey=pub_3059747c8dce5c0006938d70116095290373e&country=pk&language=en&category=${category}`);
      const newsData = response.data;
      console.log(category, newsData.results)
      return newsData.results;
    } catch (error) {
      console.error(`Error fetching ${category} news data:`, error);
      return [];
    }
  };

  

 
  
    return (
      <>
        <h2 className="text-center my-3">
          Star News - Top  Headlines
        </h2>

       
        <div className="container">
        {location.pathname !=="/"?
         ( <div className="row -3">
            
         {news.map((element) => {

if (element) {
return (
<div className="col-md-4" key={element.article_id}>


   <Newsitem
   title={element.title ? element.title.slice(0, 30) : ""}
   description={element.description ? element.description.slice(0, 88) : ""}
   imgUrl={element.image_url? element.image_url : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
   newsUrl={element.link ? element.link : ""}
   author={element.creator ? element.creator : ""}
   date={element.pubDate? element.pubDate : ""}
   source={element.source_id && element.source_id ? element.source_id : ""}
 />

 

 

</div>
);
} else {
// Handle the case where 'element' is undefined
return null;
}
})}

       </div>):<TopNews/>
        }
      </div>

          
        {/* </InfiniteScroll> */}
        {/* <div className="d-flex justify-content-between">
          <button
            disabled={page > 1 ? false : true}
            className="btn btn-primary "
            onClick={handlerPrevious}
          >
            &larr; Previous
          </button>
          <button 
          disabled= {page  > Math.ceil(totalResults / pageSize)?true:false}
          
          className="btn btn-primary " onClick={handlerNext}>
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  
}

export default News;