import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import Header from "./Header";
import Sidebar from "./Sidebar";

class MainContainer extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(MainContainer);
