import { useContext, useEffect } from "react"
import ArticlesCard from "../ArticlesCard/ArticlesCard"
import { ArticleContext } from "../../../../../../Context/ArticleContext/ArticleContext"
import { Box } from "@mui/material";

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