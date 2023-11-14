// NewsProvider.js
import React ,{useState}from 'react'
import NewsContext from './context';


const NewsProvider = ({children}) => {

  const [news, setnews] = useState([]);
  
  const defaultImage =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

// components



// count Words in your content
  function countWords(paragraph, getWords) {
    const words = paragraph.split(/\s+/);
    const wordCount = words.length;
    if (wordCount <= getWords) {
      return words.join(" ");
    } else {
      return words.slice(0, getWords).join(" ")+"...";
    }
  }

  return (
    <NewsContext.Provider value={{countWords,news,setnews,defaultImage}}>
        {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider