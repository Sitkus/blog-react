import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 700
  },
  media: {
    height: 260,
  },
  link: {
    textDecoration: 'none'
  }
}));

export default useStyles;