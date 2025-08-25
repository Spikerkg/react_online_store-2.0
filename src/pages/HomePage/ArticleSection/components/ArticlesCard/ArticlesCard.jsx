
import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Typography,  } from "@mui/material"
import { trancurateContent } from "../../../../../utils/TrancurateContent";
import { useNavigate } from "react-router-dom";

const ArticlesCard = (props) => {
    

const navigate = useNavigate()

    return (
        <Card sx={{width:"30%"}}>
            <CardHeader
            avatar ={ 
                <Avatar sx={{bgcolor: "red"}}>
                    R
                </Avatar>}
                title={props.article.author}
                subheader={props.article.date}
                />
<CardMedia 
sx={{ height: 230, width: '100%', objectFit: 'cover' }}
image={props.article.image}/>

<CardContent>
    <Box display="flex" flexDirection="column" gap="20px">
           <Typography variant="h5">
{props.article.title}
    </Typography>
    <Typography variant="body2">
{trancurateContent(props.article.content, 25)}
    </Typography>
    <Button variant="contained" onClick={()=> navigate(`/articles/${props.article.id}`)}> 
                View more
    </Button> 
    </Box>

</CardContent>



        </Card>
    )
}

export default ArticlesCard;