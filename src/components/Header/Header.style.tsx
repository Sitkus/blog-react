import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    color: 'white'
  },
  title: {
    flexGrow: 1
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    width: 'auto'
  },
  input: {
    color: 'white !important',
    marginLeft: theme.spacing(2)
  }
}));

export default useStyles;