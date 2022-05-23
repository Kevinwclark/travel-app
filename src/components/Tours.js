import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Tours(tour) {
  return (
    <div className="tours-container">
        <Card sx={{ maxWidth: 500, }} key={tour.id}>
        <CardMedia
          component="img"
          alt={tour.name}
          height="140"
          image={tour.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tour.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tour.info}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}