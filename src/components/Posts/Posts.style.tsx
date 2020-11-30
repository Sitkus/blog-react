import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    marginBottom: '80px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '40px'
    }
  },
  media: {
    height: 260,
  },
  link: {
    textDecoration: 'none'
  }
}));

export default useStyles;