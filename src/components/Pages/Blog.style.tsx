import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  gridRoot: {
    padding: '50px 0'
  },
  root: {
    maxWidth: 700
  },
  media: {
    height: 200,
  },
}));

export default useStyles;