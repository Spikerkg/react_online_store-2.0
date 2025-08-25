import { Avatar, Box, Container, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { ArticleContext } from "../../../../Context/ArticleContext/ArticleContext";
import { useParams } from "react-router-dom";

const ArticlesDetailsPage = () => {

const {currentArticle, getCurrentArticle} = useContext (ArticleContext);

console.log (currentArticle)

const  {id } = useParams();


useEffect (() => {
    getCurrentArticle(Number(id))
},[]);

if (currentArticle === null ) return "Загрузка..."

    return (<Box paddingTop="50px">
        <Container>
            <Box display="flex" flexDirection="column" gap="20px">
                <Typography variant="h2">{currentArticle.title}</Typography>
                <Box display="flex" alignItems="center" gap="10px">
                 <Avatar>R</Avatar> 
                 <Typography variant="body2">{currentArticle.author}</Typography>  
                 <Typography variant="body2">{currentArticle.date}</Typography>  
                </Box>
                
                <img style={{maxWidth:"100%"}} src={currentArticle.image} alt="" />
            </Box>
            <Box>
                <Typography variant="body2">{currentArticle.content}</Typography>
            </Box>
        </Container>
    </Box>)
};


export default ArticlesDetailsPage
