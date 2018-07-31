import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '25%',
    marginBottom: 12,
    marginRight: 12,
    float: 'left',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function AlbumCard(props) {
  const { classes, title, link } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={link + "/photos"} size="small">Photos</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(AlbumCard);
