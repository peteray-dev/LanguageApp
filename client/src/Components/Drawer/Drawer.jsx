import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { CgMenuGridR } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { BsPeopleCircle } from 'react-icons/bs';
import { MdTranslate } from 'react-icons/md';
import { IoBookSharp } from 'react-icons/io5';
import { BsPeopleFill } from 'react-icons/bs';
import Image from '../../Assets/image.png';
import '../Drawer/Drawer.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Drawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{ marginTop: '15px' }}
      className={`main-div ${clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}`}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img
        src={Image}
        className="profile-image"
        style={{ marginLeft: '55px', width: '130px', height: '130px' }}
      />
      <List className="list" style={{ fontSize: '30px' }}>
        {['Home'].map((text) => (
          <ListItem component={Link} key={text} to="/">
            <ListItemIcon>{<AiFillHome />} </ListItemIcon>
            <ListItemText
              className="text"
              primary={text}
              style={{ fontSize: '80px' }}
            />
          </ListItem>
        ))}
      </List>
      <List className="list" style={{ fontSize: '30px' }}>
        {['My Profile'].map((text) => (
          <ListItem component={Link} key={text}  to="/my-profile">
            <ListItemIcon>{<BsPeopleCircle />} </ListItemIcon>
            <ListItemText className="text" primary={text} />
          </ListItem>
        ))}
      </List>
      <List className="list" style={{ fontSize: '30px' }} >
        {['Translator'].map((text) => (
          <ListItem component={Link} key={text} to="/translator">
            <ListItemIcon>{<MdTranslate />} </ListItemIcon>
            <ListItemText className="text" primary={text} />
          </ListItem>
        ))}
      </List>
      <List className="list" style={{ fontSize: '30px' }} >
        {['Learn'].map((text) => (
          <ListItem component={Link} key={text} to="/learn">
            <ListItemIcon>{<IoBookSharp />} </ListItemIcon>
            <ListItemText className="text" primary={text} />
          </ListItem>
        ))}
      </List>
      <List className="list" style={{ fontSize: '30px' }} to="/posts">
        {['Community'].map((text) => (
          <ListItem component={Link} key={text} to="/posts">
            <ListItemIcon>{<BsPeopleFill />} </ListItemIcon>
            <ListItemText className="text" primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="list" style={{ fontSize: '30px' }} >
        {['Logout'].map((text) => (
          <ListItem component={Link} key={text} to="/login">
            <ListItemIcon>
              {<RiLogoutBoxFill style={{ fontSize: 'bold' }} />}{' '}
            </ListItemIcon>
            <ListItemText className="text" primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  ); 

  return (
    <div className="drawer">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <CgMenuGridR
              style={{ fontSize: '30px', marginLeft: '-10px', marginTop: '10px', color: '#18c74' }}
            />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            className="swipabledrawer"
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
