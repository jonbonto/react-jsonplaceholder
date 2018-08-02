import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AlbumOutlineIcon from "@material-ui/icons/AlbumOutlined";
import NotesIcon from "@material-ui/icons/Notes";
import { withStyles } from "@material-ui/core";

import styles from "./styles";

const Sidebar = (props) => {
  const { classes, theme, mobileOpen, handleDrawerToggle } = props;
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <VerifiedUserIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/albums">
          <ListItemIcon>
            <AlbumOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Albums" />
        </ListItem>
        <ListItem button component={Link} to="/posts">
          <ListItemIcon>
            <NotesIcon />
          </ListItemIcon>
          <ListItemText primary="Posts" />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer> 
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Sidebar);
