import { useContext, useEffect } from "react"
import ArticlesCard from "../ArticlesCard/ArticlesCard"

import { Box } from "@mui/material";
import { ArticleContext } from "../../../../../../Context/ArticleContext/ArticleContext";


const ArticlesList = () => {

    const {articles, getArticles} = useContext (ArticleContext);


    useEffect(()=>{
        getArticles();
    },[]) ;

return (
    <Box display="flex" flexWrap="wrap" gap="20px">
        {articles.map ((article)=> {
            return <ArticlesCard key={article.id} article={article}/>
        })}
    </Box>
)
}

export default ArticlesList