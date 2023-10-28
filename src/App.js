import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import News from "./component/News";
import "./App.css"
import NewsDetail from "./component/NewsDetail";
import ErrorPage from "./component/ErrorPage";
import NewsProvider from "./component/context/NewsProvider";
import Footer from "./component/Footer";
// import axios from "axios";
 
const App = () => {


 console.log("Iswork App")

 

  return (
      <NewsProvider>
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
      <Footer/>
      </Router>
    </div>
    </NewsProvider>
  );
};

export default App;
