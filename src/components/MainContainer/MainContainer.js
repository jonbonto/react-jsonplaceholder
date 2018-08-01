import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AlbumOutlineIcon from '@material-ui/icons/AlbumOutlined';
import NotesIcon from '@material-ui/icons/Notes';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class MainContainer extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Soul
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
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
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(MainContainer);
