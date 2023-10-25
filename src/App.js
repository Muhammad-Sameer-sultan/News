import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import News from "./component/News";
import "./App.css"
import NewsDetail from "./component/NewsDetail";
import ErrorPage from "./component/ErrorPage";
// import axios from "axios";
 
const App = () => {

// let location =useLocation;
  // const fetchTopNews = async () => {
  //   try {
  //     const response = await axios.get('https://newsdata.io/api/1/news?apiKey=pub_3059747c8dce5c0006938d70116095290373e&country=pk');
  //     const newsData = response.data;
  //     settopnews(newsData.results);
  //   } catch (error) {
  //     console.error('Error fetching top news data:', error);
  //   }
  // };

  

  // const location = useLocation();

  // useEffect(() => {
  //   fetchTopNews();
  // }, []);

 

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News/>} />
          <Route path="/business" element={<News/>} />
          <Route path="/entertainment" element={<News />} />
          <Route path="/food" element={<News />} />
          <Route path="/health" element={<News />} />
          <Route path="/sports" element={<News />} />
          <Route path="/science" element={<News />} />
          <Route path="/newsinfo" element={<NewsDetail />} />
          <Route path="*" element={<ErrorPage />} />

          {/* <Route path="/business" element={<News news={businessnews} />} />
          <Route path="/food" element={<News news={foodnews} />} />
          <Route path="/health" element={<News news={healthnews} />} />
          <Route path="/sports" element={<News news={sportsnews} />} />
          <Route path="/science" element={<News news={sciencenews} />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
