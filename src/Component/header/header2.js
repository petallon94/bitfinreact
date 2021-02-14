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
import { FaLaughWink, FaPencilAlt, FaComments} from "react-icons/fa";
import {BiSearchAlt, BiMenu } from "react-icons/bi";
import Icon from '@material-ui/core/Icon';

import {FiMoreVertical, FiLogIn} from "react-icons/fi";
import { FcSelfie } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import logow from "../../image/logo_w.png";
import store from "../../redux/store";
import {actionType, mainViewType} from "../../redux/config";
import './header.css';
import { ListItemSecondaryAction } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background: theme.palette.background.default,
    border: 0,
    borderRadius: 3,
  },
  header: {
    backgroundColor: "#f57145",
    color: "black",
    boxShadow: "0px 0px 10px 0px #333"
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

export default function SecondarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };



const setLogOut = () => {
  alert("로그아웃 되었습니당!!!! 다음에 또만나요");
  
  store.dispatch({
      type: actionType.LOG_OUT,
      // mainView: mainViewType.MainPage
      loginId: '',
      mnick: '',
      mnum: '',
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

  const handleProfileClose = () => {
    setAnchorEl(null);
    document.location.href = "http://localhost:3000/main/profile/"
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'secondary-search-account-menu';
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
      <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
    </Menu>
  );

  {/*모바일일때 */}
  const mobileMenuId = 'secondary-search-account-menu-mobile';
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
      <NavLink exact to="/main/reviewwrite" >
      <MenuItem>
        <FaPencilAlt/>
      </MenuItem>
      </NavLink>
      <MenuItem>
        <NavLink exact to="/main/chatting" >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={1} color="secondary">
            <FaComments />
          </Badge>
        </IconButton>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to="/login" >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <FiLogIn />
        </IconButton>
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
      <AppBar className={classes.header} position="static">
        <Toolbar>
          {/*타이틀 */}
          <NavLink exact to="/main" >
          <img className="logo" src ={logow}/>
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
          <NavLink exact to="/main/reviewwrite" >
            <IconButton aria-label="show 17 new notifications" color="inherit">
                <FaPencilAlt />
            </IconButton>
            </NavLink>
            <IconButton aria-label="show 1 new notifications" color="inherit">
            <NavLink exact to="/main/Chatting" >
              <Badge badgeContent={2} color="secondary">
                <FaComments />
              </Badge>
              </NavLink>
            </IconButton>
            
            <IconButton aria-label="show 1 new notifications" color="inherit" onClick={setLogOut}>
            <NavLink exact to="/" >
                <FiLogIn />
                </NavLink>
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
