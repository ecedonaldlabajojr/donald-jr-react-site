import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#0a192f',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    media: {
        height: 0,
        paddingTop: '100%',
    },
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(4),
    },
    listColor: {
        color: '#8892b0',
    }
}));

const DrawerNav = () => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Avatar
                className={classes.avatar}
                src="/images/Donald_2x2.jpg"
                alt="donald-jr"
            />

            <Divider />
            <List className={classes.listColor}>
                {['Home', 'Projects', 'About Me', 'Experience', 'Contact', 'Resume'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon className={classes.listColor}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    )
}

export default DrawerNav
