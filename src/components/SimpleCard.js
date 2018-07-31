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

function SimpleCard(props) {
  const { classes, title, content, link } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={link + "/posts"} size="small">Posts</Button>
          <Button component={Link} to={link + "/albums"} size="small">Albums</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleCard);
