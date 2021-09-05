import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import withWidth from "@material-ui/core/withWidth";
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';

/* Import Sections */
import Welcome from './sections/Welcome';
import Profile from './sections/Profile';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Projects from './sections/Projects';
import Loading from './layout/Loading';
/* */

/* Socia Media URLS */
const { myEmail } = require('../data');

/* Material UI Icons */
import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import CloseIcon from '@material-ui/icons/Close';
/* -------------------- */
const drawerWidth = 260;
const highlight = '#64ffda';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: '#8892b0',
        position: 'relative',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        background: '#112240',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            flexShrink: 0,
        },
        background: "#112240"
    },
    content: {
        flexGrow: 1,
        paddingX: theme.spacing(3),
        background: "#0a192f",
    },
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(4),
    },
    listColor: {
        color: '#8892b0',
    },
    listItem: {
        '&:hover': {
            background: "#081526"
        }
    },
    btn: {
        color: highlight,
        width: '80%',
        height: '50px',
        border: `2px solid ${highlight}`,
        borderRadius: '5px',
    },
    btnIcon: {
        color: highlight,
    },
    close: {
        color: theme.palette.grey[100],
        position: 'absolute',
        top: theme.spacing(1.5),
        right: theme.spacing(1.5),
        transition: '0.1s all ease-out',
        '&:hover': {
            color: highlight,
            transform: 'scale(1.25)',
        }
    }
}));


const drawerIcons = [<HomeIcon />, <EmojiObjectsIcon />, <InfoIcon />, <WorkIcon />, <MessageIcon />];
const sectionTitles = ['Home', 'Profile', 'Experience', 'Projects', 'Contact'];
function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isMobile = /xs|sm/.test(props.width);
    const isMobileXS = /xs/.test(props.width);
    const [userData, setUserData] = React.useState(null);

    React.useEffect(() => {
        fetch('https://donald-portfolio-site-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then(data => setUserData(data))
            .catch(e => console.log(e))
    }, []);

    const handleDrawerToggle = () => { if (isMobile) setMobileOpen(!mobileOpen); }

    const drawer = (
        <div>
            <Box fontWeight="fontWeightBold" textAlign="center" className={classes.listColor} fontSize={22} p={1.5} mt="2rem" fontFamily="Monospace">
                BACKEND DEVELOPER
            </Box>
            <Box component="div" display="flex" justifyContent="center">
                <Avatar
                    className={classes.avatar}
                    src="/images/Donald_2x2.jpg"
                    alt="donald-jr" />
            </Box>
            <List className={classes.listColor}>
                {sectionTitles.map((text, index) => (
                    <ListItem button key={text} className={classes.listItem} onClick={handleDrawerToggle} button component="a" href={index === sectionTitles.length - 1 ? `mailto:${myEmail}` : `#${text.replace(" ", "").toLowerCase()}`}>
                        <ListItemIcon className={classes.listColor}>{drawerIcons[index]}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Box display="flex" justifyContent="center" mt={2}>
                <Button className={classes.btn} mx="2px" component="a" href="/Donald Labajo Jr. CV - BackEnd Developer.pdf" target="_blank"><IconButton><LaunchIcon className={classes.btnIcon} /></IconButton>RESUME</Button>
            </Box>
            {isMobileXS && <CloseIcon className={classes.close} fontSize="large" onClick={handleDrawerToggle} />}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            {!userData && <Loading />}
            {userData &&
                <div className={classes.root}>
                    <CssBaseline />
                    <Hidden mdUp implementation="css">
                        <AppBar position="fixed" className={classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon fontSize='large' />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </Hidden>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Hidden mdDown implementation="css">
                            <Drawer
                                container={container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                classes={{ paper: classes.drawerPaper }}
                                ModalProps={{ keepMounted: true }}>
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden smDown implementation="css">
                            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                    <main className={classes.content}>
                        <Welcome id="home" />
                        <Profile id="profile" />
                        <Experience id="experience" />
                        <Projects id="projects" />
                        <Footer id="footer" />
                    </main>
                </div>}
        </React.Fragment>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default withWidth()(ResponsiveDrawer);