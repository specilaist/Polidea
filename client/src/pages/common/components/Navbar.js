import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setViewerToken } from '../../Viewer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 1050,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { token } = useSelector(state => state.viewer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(setViewerToken(null));
    history.push('/');
  };

  return (

    <AppBar style={{ backgroundColor: '#4f3558' }} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>

          <Button
            component={Link}
            to='/'
            color="inherit">
            Pollideas
    </Button>

        </Typography>
        {
          token ?
          <React.Fragment>
            <Button a href="/createpost" color="inherit">New Idea</Button>
            <Button a href="/posts/mine" color="inherit">My Ideas</Button>
            <Button a href="/myaccount" color="inherit">My Account</Button>
            <Button
              color='inherit'
              onClick={handleSignOut}
            >
              Log Out
            </Button>
          </React.Fragment>
           :
            <div>

              <Button
                to='/signup'
                component={Link}
                color="inherit">
                Register
          </Button>
              <Button
                to='/signin'
                component={Link}
                color="inherit">
                Login
          </Button>
            </div>
        }

      </Toolbar>
    </AppBar>

  );
};
