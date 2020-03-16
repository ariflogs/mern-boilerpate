import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SchoolIcon from '@material-ui/icons/School';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import SubjectIcon from '@material-ui/icons/Subject';
import { Link as RouterLink } from 'react-router-dom';

import * as ROUTES from '../constants/routes';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => createStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    paddingTop: theme.spacing(5),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 6,
    minWidth: 50,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

// eslint-disable-next-line react/prop-types
export default function Sidebar({ open, onClose }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} style={{ marginRight: 20 }}>
          <IconButton onClick={onClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Button
              fullWidth
              color="primary"
              component={RouterLink}
              to={ROUTES.ACADEMIC}
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Academic" />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              color="primary"
              component={RouterLink}
              to={ROUTES.NOTES}
            >
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              color="primary"
              component={RouterLink}
              to={ROUTES.MESSAGES}
            >
              <ListItemIcon>
                <Badge badgeContent={4} color="secondary">
                  <ChatIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              color="primary"
              component={RouterLink}
              to={ROUTES.NOTIFICATIONS}
            >
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              color="primary"
              component={RouterLink}
              to={ROUTES.MATES}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Mates" />
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
