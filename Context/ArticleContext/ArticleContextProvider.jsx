import axios from "axios";
import { useState } from "react"
import { ArticleContext } from "./ArticleContext";

const ArticlesContextProvider = (props) => {

    const [articles, setArticles] = useState([]);
    const [currentArticle , setCurrentArticle] = useState(null); 

    const getArticles = async () => {
      try{
      const {data} = await axios.get ("http://localhost:3000/articles")
        setArticles (data)

      } catch (e) {
        console.log(e)
      }
    };


    const getCurrentArticle = async (currtentId) => {
      try {
const {data} = await axios.get (`http://localhost:3000/articles/${currtentId}`)
        setCurrentArticle(data)
      } catch (e) {
        console.log (e)
      }
    }

    return (
       < ArticleContext.Provider
       value = {
        {
articles,
getArticles,
currentArticle ,
getCurrentArticle,
        }
       }
       >
       {props.children}
       </ArticleContext.Provider>
    )
}

export default ArticlesContextProvider;
