import React,{useEffect,useState} from "react";
import { useLocation} from "react-router-dom";

const NewsDetail = () => {
  // const navigate=useNavigate();
  const location = useLocation();
  const data = location.state;
  let { category_path:relativeNews, newsDetail:  news } = data;
  const [selectedCategory, setSelectedCategory] = useState(relativeNews);

useEffect(() => {
  
  // console.log(category_path)


}, [selectedCategory])



  const newsView=(category_path)=>{
    // navigate("/newsinfo", { state: {category_path,news}  });
    setSelectedCategory(category_path)
    console.log("first")
  }
  



  function countWords(paragraph, getWords) {
    // Split the paragraph into 
    
    const words = paragraph.split(/\s+/);

    // Count the total number of words
    const wordCount = words.length;

    // Return the first 40 words
    if (wordCount <= getWords) {
      return words.join(" ");
    } else {
      return words.slice(0, getWords).join(" ")+" ...";
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
          <div className="position-sticky  " style={{top:"2rem"}}>
            <h3 className="badge bg-success">{news.category}</h3>
            <img
              src={news.image_url ? news.image_url : defaultImage}
              className="w-100"
              style={{ height: "480px" }}
              alt=".."
            ></img>
            <h2 className="mt-3 display-6 fst-italic">{news.title}</h2>
            <p>
              {news.pubDate}
              <span className="ms-3 text-bold">{news.country}</span>{" "}
            </p>
            <div>
              <i className="bi bi-person-fill"></i>{" "}
              <span>{news.creator ? news.creator : "Anonyms"}</span>
            </div>
            <p className="text-emphasis lh-5 fs-5 my-3 ">{news.description}</p>
          </div>
        </div>

        {/* About Sider */}
        <div className="col-lg-3 mt-5 ">
         <div className="position-sticky  " style={{top:"2rem"}}>
         <h3 className="text-underline text-danger">Relative News</h3>
          {
            selectedCategory.slice(0,6).map((news)=>((
              <div key={news.article_id} className="card  p-3 m-2  position-relative">
              <div className="d-lg-flex gap-2">
                <img
                  src={news.image_url}
                  className="img-fluid d-inline"
                  alt=".."
                  style={{ width: "35%" }}
                />
                <h6 className="card-title text-success" onClick={()=>newsView(news)}>
                  
                  {countWords(news.title, 7)}
                </h6>
              </div>
              <p className="card-text lead fs-6">{countWords(news.description, 12)}</p>
            </div>
            )))
          }
         </div>
        </div>
      </div>
    </main>
  );
};

export default NewsDetail;
