import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import TopNews from "./TopNews";
import axios from "axios";
import { useContext } from "react";
import NewsContext from "./context/context";
import InfiniteScroll from "react-infinite-scroll-component";

const News = () => {
  // import from NewsContext
  const { countWords, news, setnews } = useContext(NewsContext);

  // states
  const [topnews, settopnews] = useState([]);
  const [businessnews, setbusinessnews] = useState([]);
  const [entertainmentnews, setentertainmentnews] = useState([]);
  const [foodnews, setfoodnews] = useState([]);
  const [healthnews, sethealthnews] = useState([]);
  const [sportsnews, setsportsnews] = useState([]);
  const [sciencenews, setsciencenews] = useState([]);
  const [articleLength, setarticleLength] = useState(200)
  const [NextPage, setNextPage] = useState({
    business: "",
    top: "",
    entertainment: "",
    food: "",
    health: "",
    sports: "",
    science: "",
  });
  const [isGoNextPage, setisGoNextPage] = useState(false);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const moreArticles = () => {
    setisGoNextPage(true);
  };

  useEffect(() => {
    // console.log("mylocation",location.pathname)

    const fetchData = async () => {
      try {
        let category = location.pathname.slice(1);
        if (category === "") {
          category = "top";
        }
        console.log(category, "nextpage", NextPage);

        let fetchedNews = [];

        switch (category) {
          case "business":
            if (businessnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setbusinessnews(fetchedNews);
            } else if (isGoNextPage) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setbusinessnews([...businessnews, ...fetchedNews]);
              fetchedNews = businessnews;
              setisGoNextPage(false);
            } else {
              fetchedNews = businessnews;
            }
            break;
          case "entertainment":
            if (entertainmentnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setentertainmentnews(fetchedNews);
            } else if (isGoNextPage) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setentertainmentnews([...entertainmentnews, ...fetchedNews]);
              fetchedNews = entertainmentnews;
              setisGoNextPage(false);
            } else {
              fetchedNews = entertainmentnews;
            }
            break;
          case "food":
            if (foodnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setfoodnews(fetchedNews);
            } else if (isGoNextPage) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setfoodnews([...foodnews, ...fetchedNews]);
              fetchedNews = foodnews;
              setisGoNextPage(false);
            } else {
              fetchedNews = foodnews;
            }
            break;
          case "health":
            if (healthnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              sethealthnews(fetchedNews);
            } else if (isGoNextPage) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              healthnews([...healthnews, ...fetchedNews]);
              fetchedNews = healthnews;
              setisGoNextPage(false);
            } else {
              fetchedNews = healthnews;
            }
            break;
          case "sports":
            if (sportsnews.length === 0) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setsportsnews(fetchedNews);
            } else if (isGoNextPage) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setsportsnews([...sportsnews, ...fetchedNews]);
              fetchedNews = sportsnews;
              setisGoNextPage(false);
            } else {
              fetchedNews = sportsnews;
            }
            break;
          case "science":
            if (sciencenews.length === 0) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setsciencenews(fetchedNews);
            } else if (isGoNextPage) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              setsciencenews([...sciencenews, ...fetchedNews]);
              fetchedNews = sciencenews;
              setisGoNextPage(false);
            } else {
              fetchedNews = sciencenews;
            }

            break;
          // case "top":
          //   if (sciencenews.length === 0) {
          //     fetchedNews = await fetchNewsByCategory(
          //       category,
          //       NextPage[category]
          //     );
          //     settopnews(fetchedNews);
          //   } else if (isGoNextPage) {
          //     fetchedNews = await fetchNewsByCategory(
          //       category,
          //       NextPage[category]
          //     );
          //     settopnews([...settopnews, ...fetchedNews]);
          //     fetchedNews = settopnews;
          //     setisGoNextPage(false);
          //   } else {
          //     fetchedNews = sciencenews;
          //   }

          //   break;

          default:
            if (topnews.length < 10) {
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              settopnews(fetchedNews);
              setisGoNextPage(true);
            } else if (isGoNextPage) {
              console.log("isgo condition");
              fetchedNews = await fetchNewsByCategory(
                category,
                NextPage[category]
              );
              settopnews([...topnews, ...fetchedNews]);
              fetchedNews = topnews;
              setisGoNextPage(false);
            } else {
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
    
  }, [location, isGoNextPage, news]);

  const fetchNewsByCategory = async (category, nextPageString) => {
    try {
      // setloading(true);
      const response = await axios.get(
        !nextPageString
          ? `https://newsdata.io/api/1/news?apiKey=pub_3059747c8dce5c0006938d70116095290373e&country=pk&language=en&category=${category}`
          : `https://newsdata.io/api/1/news?apiKey=pub_3059747c8dce5c0006938d70116095290373e&country=pk&language=en&category=${category}&page=${nextPageString}`
      );

      const newsData = response.data;
      setNextPage({ ...NextPage, [category]: newsData.nextPage });
      setarticleLength(newsData.totalResults)         
      console.log("My news array", NextPage);
      console.log("My news result", newsData);
      // setloading(false);
      return newsData.results;
    } catch (error) {
      console.error(`Error fetching ${category} news data:`, error);
      navigate("*");
      return [];
    }
  };
  console.log("My news array", news);
  return (
    <>
      <InfiniteScroll
        dataLength={articleLength}
        next={moreArticles}
        hasMore={true}
        loader={<Spinner/>}
      >
        <div className="container mb-5">
          {console.log(location.pathname)}
          {location.pathname !== "/" ? (
            <div className="row ">
              <h2 className="text-center my-3">Star News - Top Headlines</h2>
              {/* {news.length===0 && <div className="text-info fs-4">No Latest news avaliable for news<div/>} */}
              {news.map((element) => {
                if (element) {
                  return (
                    <div className="col-md-4" key={element.article_id}>
                      <Newsitem
                        title={
                          element.title ? countWords(element.title, 5) : ""
                        }
                        description={
                          element.description
                            ? countWords(element.description, 30)
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
                        category_path={news}
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
            <TopNews topNews={news} />
          )}
        
        </div>
      </InfiniteScroll>

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
