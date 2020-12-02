import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  postGrid: {
    position: 'absolute',
    top: '170px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%'
  },
  container: {
    // margin: '50px 0'
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