import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const MediaCard = (props) => {
  const { movie } = props;

  return (
    <Grid item xs={12} sm={3} marginBottom={5}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="375"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {movie.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Released on {movie.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MediaCard;
