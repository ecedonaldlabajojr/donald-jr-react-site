import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

/* Material UI Icons */
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
/* -------------------- */

const highlight = '#64ffda';
const technologiesArr = ["Javascript", "Node.js (Express)", "MongoDB", "React.js", "Redux", "styled-components", "HTML5", "CSS3", "Bootstrap4"]
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(136, 146, 176, 0.5)',
        height: '2px',
        marginBottom: theme.spacing(5),
    },
    highlight: {
        color: highlight,
    },
    light: {
        color: theme.palette.grey[300],
    },
    icon: {
        color: theme.palette.grey[300],
        minWidth: "0",
    }
}))
const Profile = () => {
    const classes = useStyles();

    return (
        <Box width="100%" py={5} px={10}>
            <Box maxWidth="80%">
                <Typography variant="h3" >Profile</Typography>
                <Divider className={classes.root} />
                <Typography paragraph >
                    I am a&nbsp;
                    <Box component="span" fontStyle="italic">Junior Backend Developer&nbsp;</Box>
                    at <Link href="https://www.medspecialized.com/" target="_blank" className={classes.light}>MedSpecialized, Inc.</Link>&nbsp;
                    My role spans working on the backend, building RESTful API's and new features, debugging, recommend and implement code improvements.
                </Typography>
                <Typography paragraph >
                    While I spend most of my time working on the backend, I also occasionally get involved on the Frontend on tasks or features which are closely related.
                </Typography>
                <Typography paragraph >
                    View my &nbsp;
                    <Link href="#projects" color="inherit" className={classes.highlight}>Projects</Link>
                    ,&nbsp;
                    <Link href="/Donald Labajo Jr. CV - BackEnd Developer.pdf" color="inherit" className={classes.highlight} target="_blank">Resume</Link>
                    ,&nbsp;
                    <Link href="#" color="inherit" className={classes.highlight}>Get in Touch</Link>
                    .&nbsp;
                </Typography>
                <Typography paragraph >
                    You can also find me on &nbsp;
                    <Link href="" color="inherit" className={classes.highlight}>Github</Link> &nbsp;
                    <Link href="" color="inherit" className={classes.highlight}>LinkedIn</Link> and &nbsp;
                    <Link href="" color="inherit" className={classes.highlight}>Facebook.</Link>
                </Typography>
                <Toolbar />
                <Typography>
                    Below are the technologies I've worked on so far:
                </Typography>
                <List>
                    <Grid container>
                        {technologiesArr.map(tech => (
                            <Grid item xs={12} sm={12} md={4}>
                                <ListItem>
                                    <ListItemIcon className={classes.icon} ><KeyboardArrowRightIcon /></ListItemIcon>
                                    <ListItemText primary={tech} />
                                </ListItem>
                            </Grid>))}
                    </Grid>
                </List>
            </Box>
        </Box>
    )
}

export default Profile
