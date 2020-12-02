import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: 'white',
    padding: '20px 35px',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0px'
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  title: {
    flexGrow: 1
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    width: 'auto'
  },
  inputRoot: {
    color: 'white !important'
  },
  inputUnderline: {
    '&:before': {
      borderBottom: '1px solid gray !important',
    },
    '&:after': {
      borderBottom: `1px solid ${theme.palette.primary.main} !important`
    }
  }
}));

export default useStyles;