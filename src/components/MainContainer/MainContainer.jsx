import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import Header from "./Header";
import Sidebar from "./Sidebar";

class MainContainer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header handleDrawerToggle={this.handleDrawerToggle}/>
        <Sidebar handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobileOpen}/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(MainContainer);
