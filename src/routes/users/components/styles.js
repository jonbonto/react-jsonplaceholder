const styles = theme => ({
  card: {
    marginBottom: 12,
    marginRight: 12,
    float: "left",
    [theme.breakpoints.up("md")]: {
      width: "30%"
    }
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default styles;
