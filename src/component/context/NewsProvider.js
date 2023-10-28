// NewsProvider.js
import React ,{useState}from 'react'
import NewsContext from './context';


const NewsProvider = ({children}) => {

  const [news, setnews] = useState([]);
  


// count Words in your content
  function countWords(paragraph, getWords) {
    const words = paragraph.split(/\s+/);
    const wordCount = words.length;
    if (wordCount <= getWords) {
      return words.join(" ");
    } else {
      return words.slice(0, getWords).join(" ");
    }
  }

  return (
    <NewsContext.Provider value={{countWords,news,setnews}}>
        {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider