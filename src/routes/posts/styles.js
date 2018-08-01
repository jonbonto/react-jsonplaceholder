export default theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 10
  },
  card: {
    width: '45%',
    marginBottom: 12,
    marginRight: 12,
    float: 'left',
  }
});
