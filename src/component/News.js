import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import TopNews from "./TopNews";
import axios from "axios";
import ErrorPage from "./ErrorPage";

// import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";

const News = () => {
  const [topnews, settopnews] = useState([]);
  const [businessnews, setbusinessnews] = useState([]);
  const [entertainmentnews, setentertainmentnews] = useState([]);
  const [foodnews, setfoodnews] = useState([]);
  const [healthnews, sethealthnews] = useState([]);
  const [sportsnews, setsportsnews] = useState([]);
  const [sciencenews, setsciencenews] = useState([]);
  const [news, setnews] = useState([]);
  const [NextPage, setNextPage] = useState({business:"",entertainment:"",food:"",health:"",sports:"",science:""});
  const [isGoNextPage, setisGoNextPage] = useState(false)
  const [loading, setloading] = useState(false)

  const navigate =useNavigate();
  const location = useLocation();


  const moreArticles=()=>{
    setisGoNextPage(true);
  }
  
  useEffect(() => {
    // console.log("mylocation",location.pathname)

    const fetchData = async () => {
      try {

        const category = location.pathname.slice(1);
        console.log(category,"nextpage",NextPage);

        let fetchedNews = [];

        switch (category) {
          case "business":
            if (businessnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(category,NextPage[category]);
              setbusinessnews(fetchedNews);
            }
            else if(isGoNextPage){
              fetchedNews = await fetchNewsByCategory(category,NextPage[category]);
              setbusinessnews([...businessnews,...fetchedNews]);
              fetchedNews=businessnews
              setisGoNextPage(false)
            }
           else {
              fetchedNews = businessnews;
            }
            break;
          case "entertainment":
            if (entertainmentnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(category,NextPage[category]);
              setentertainmentnews(fetchedNews);
            } 
            else if(isGoNextPage){
              fetchedNews = await fetchNewsByCategory(category,NextPage[category]);
              setentertainmentnews([...entertainmentnews,...fetchedNews]);
              fetchedNews=entertainmentnews
              setisGoNextPage(false)
            }
           
            else {
              fetchedNews = entertainmentnews;
            }
            break;
          case "food":
            if (foodnews.length === 0) {
              fetchedNews = await  fetchNewsByCategory(category,NextPage[category]);
              setfoodnews(fetchedNews);
            } 
            else if(isGoNextPage){
              fetchedNews = await fetchNewsByCategory(category,NextPage[category]);
              setfoodnews([...foodnews,...fetchedNews]);
              fetchedNews=foodnews
              setisGoNextPage(false)
            }
        
            else {
              fetchedNews = foodnews;
            }
            break;
          case "health":
            if (healthnews.length === 0) {
              fetchedNews = await  fetchNewsByCategory(category,NextPage[category]);
              sethealthnews(fetchedNews);
            }   else if(isGoNextPage){
              fetchedNews = await fetchNewsByCategory(category,NextPage[category]);
              healthnews([...healthnews,...fetchedNews]);
              fetchedNews=healthnews
              setisGoNextPage(false)
            }
            else {
              fetchedNews = healthnews;
            }
            break;
          case "sports":
            if (sportsnews.length === 0) {
              fetchedNews = await  fetchNewsByCategory(category,NextPage[category]);
              setsportsnews(fetchedNews);
            } 
            else if(isGoNextPage){
              fetchedNews = await fetchNewsByCategory(category,NextPage[category]);
              setsportsnews([...sportsnews,...fetchedNews]);
              fetchedNews=sportsnews
              setisGoNextPage(false)
            }
           
            else {
              fetchedNews = sportsnews;
            }
            break;
          case "science":
            if (sciencenews.length === 0) {
              fetchedNews = await  fetchNewsByCategory(category,NextPage[category]);
              setsciencenews(fetchedNews);
            }
            else if(isGoNextPage){
              fetchedNews = await fetchNewsByCategory(category,NextPage[category]);
              setsciencenews([...sciencenews,...fetchedNews]);
              fetchedNews=sciencenews
              setisGoNextPage(false)
            }
             else {
              fetchedNews = sciencenews;
            }
            break;
          default:
            if (topnews.length ===0) {
              fetchedNews = await fetchNewsByCategory("top",NextPage["top"]);
              settopnews(fetchedNews);
              // setisGoNextPage(true)
            }
            else if(isGoNextPage  ){
              console.log("isgo condition")
              fetchedNews = await fetchNewsByCategory("top",NextPage["top"]);
              settopnews([...topnews,...fetchedNews]);
              fetchedNews=topnews
              setisGoNextPage(false)
            }
           
             else {
              fetchedNews = topnews;
            }

            break;
        }

        setnews(fetchedNews);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, [location,isGoNextPage]);

  const fetchNewsByCategory = async (category,nextPageString) => {
    try {
      setloading(true)
      const response = await axios.get(
        !nextPageString
          ? `https://newsdata.io/api/1/news?apiKey=pub_3059747c8dce5c0006938d70116095290373e&country=pk&language=en&category=${category}`
          : `https://newsdata.io/api/1/news?apiKey=pub_3059747c8dce5c0006938d70116095290373e&country=pk&language=en&category=${category}&page=${nextPageString}`
      );

      const newsData = response.data;
      setNextPage({...NextPage,[category]: newsData.nextPage});
      setloading(false)
      console.log(category,"==>",newsData.results)
      return newsData.results;
    } catch (error) {
      console.error(`Error fetching ${category} news data:`, error);
      navigate("*")
      return [];
    }
  };

console.log(topnews)
  return (
    <>
      <div className="container mb-5">
        {location.pathname !== "/" ? (
          <div className="row -3">
            <h2 className="text-center my-3">Star News - Top Headlines</h2>
            {/* {news.length===0 && <div className="text-info fs-4">No Latest news avaliable for news<div/>} */}
            {news.map((element) => {
              if (element) {
                return (
                  <div className="col-md-4" key={element.article_id}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 30) : ""}
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
                      newsUrl={element.link ? element.link : ""}
                      author={element.creator ? element.creator : ""}
                      date={element.pubDate ? element.pubDate : ""}
                      source={
                        element.source_id && element.source_id
                          ? element.source_id
                          : ""
                      }
                    />
                  </div>
                );
              } else {
                // Handle the case where 'element' is undefined
                return null;
              }
            })}
          </div>
        ) : (
          <TopNews topNews={topnews} />
        )}
        {loading && <Spinner/>}
          {
            !loading && 
            <button className="btn  btn-success mb-5" onClick={()=>{moreArticles()
              console.log("button click")}}>Read more</button>
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
};

export default News;
