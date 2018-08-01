import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function AlbumCard(props) {
  const { classes, title, link } = props;

  return (
    <div>
      <Card className={classes.cardAlbum}>
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
