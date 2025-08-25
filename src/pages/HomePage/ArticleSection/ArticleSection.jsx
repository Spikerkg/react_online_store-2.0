import { Box, Container, Typography } from "@mui/material";
import ArticlesList from "./components/ArticlesList/ArticlesList";

const ArticleSection = () =>{
    return <Box paddingTop="70px">
            <Container>
                <Typography align="center" pb="30px" marginTop= "20px" component="h2" variant="h2" fontWeight="700">
                    Articles
                </Typography>
                <ArticlesList/>
            </Container>
          </Box>;
}

export default ArticleSection;
