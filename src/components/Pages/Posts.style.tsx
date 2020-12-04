import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    maxWidth: '700px',
    margin: '40px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '30px',
    },
    '&:last-child': {
      marginBottom: 0
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