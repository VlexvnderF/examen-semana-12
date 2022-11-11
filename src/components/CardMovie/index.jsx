import {
    Card,
    CardContent,
    CardMedia,
    Box,
    Typography,
    Grid,
  } from "@mui/material";
const CardMovie=({movies}) =>{
    return(
        <Box >
            <h2 id="tarjeta">Popular Movies</h2>
            <Grid container spacing={1} mt={8}>
                
                {movies.length > 0 &&
                    movies.map(({title, images, description}) => (
                        <Grid item xs ={8} sm={4}>
                            <Card id="tarjeta" >
                                <CardMedia className="container"
                                component ="img"
                                width={150}
                                heigh={150}
                                image={`${images.posterArt.url}`}
                                />
                                <p>{title}</p>
                                <p>{description}</p>
                            </Card>
                        </Grid>
                    ))}
            </Grid>

        </Box>
        
        

    )
};

export default CardMovie;