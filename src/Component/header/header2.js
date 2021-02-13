import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { FaLaughWink, FaHeart, FaComments} from "react-icons/fa";
import {BiSearchAlt, BiMenu } from "react-icons/bi";
import {FiMoreVertical, FiLogIn} from "react-icons/fi";
import { FcSelfie } from "react-icons/fc";
import { NavLink } from 'react-router-dom';

import store from "../../redux/store";
import {actionType, mainViewType} from "../../redux/config";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      alignItems: 'center',
      marginLeft: 300,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };



 const setLogOut = () => {
    console.log("Menu setLogOut()");
    
    store.dispatch({
        type: actionType.LOG_IN,
        // mainView: mainViewType.MainPage
        loginId: '',
        logged: false
    });
}


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  {/*모바일일때 */}
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <NavLink exact to="/main/follow" >
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FaLaughWink />
          </Badge>
        </IconButton>
        <p>follower</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <FaHeart />
          </Badge>
        </IconButton>
        <p>likes</p>
      </MenuItem>
      <MenuItem>
        <NavLink exact to="/main/chatting" >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={1} color="secondary">
            <FaComments />
          </Badge>
        </IconButton>
        <p>chatting</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to="/login" >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <FiLogIn />
        </IconButton>
        <p>login</p>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FcSelfie />
        </IconButton>
        <NavLink exact to="/main/mypage"><p>Profile</p></NavLink>
      </MenuItem>
    </Menu>
  );

  return (

    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {/*타이틀 */}
          <NavLink exact to="/main" >
          <Typography className={classes.title} variant="h6" edge="start" noWrap >
            호로록(Just do eat)          
          </Typography>
          </NavLink>  
          {/*검색 */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <BiSearchAlt />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <FaLaughWink />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <FaHeart />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 1 new notifications" color="inherit">
            <NavLink exact to="/main/Chatting" >
              <Badge badgeContent={2} color="secondary">
                <FaComments />
              </Badge>
              </NavLink>
            </IconButton>
            <IconButton aria-label="show 1 new notifications" color="inherit" onClick={setLogOut}>
                <FiLogIn />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <FcSelfie />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <FiMoreVertical />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
