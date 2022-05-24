import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Tours({name, img, info, id, removeTour}) {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <div className="tours-container" key={id}>
        <Card sx={{ maxWidth: 500, }} >
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {readMore ? info : `${info.substring(0, 100)}...`}
            <Button onClick={() => setReadMore(!readMore)}size="small">{readMore ? `Read Less` : `Read More`}</Button>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => removeTour(id)} size="small">Not Interested</Button>
        </CardActions>
      </Card>
    </div>
  );
}