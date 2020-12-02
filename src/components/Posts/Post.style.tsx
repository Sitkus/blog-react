import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  postGrid: {
    position: 'absolute',
    top: '170px',
    width: '100%',
  },
  container: {
    margin: '0 auto 50px'
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