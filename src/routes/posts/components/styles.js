export default theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 10
  },
  cardComment: {
    width: "45%",
    marginBottom: 12,
    marginRight: 12,
    float: "left",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  cardPost: {
    width: "25%",
    marginBottom: 12,
    marginRight: 12,
    float: "left",
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardActions: {
    display: "block",
    textAlign: "right"
  }
});
