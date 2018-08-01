import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

import styles from "./styles";

const Header = (props) => {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Soul
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
