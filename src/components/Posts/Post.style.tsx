import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: '50px 0'
  },
  title: {
    marginBottom: '20px',
  },
  heading: {
    margin: '50px 0 30px'
  },
  paragraph: {
    marginBottom: '20px',
    '&:last-child': {
      marginBottom: 0
    }
  }
}));

export default useStyles;