import { Typography, Box, Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const myEmail = "ecedonaldlabajojr@gmail.com";
const highlight = '#64ffda';
const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
    },
    container: {
        height: '100vh',
        position: "relative",
        zIndex: "50",
    },
    name: {
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: "3rem",
        },
        color: theme.palette.grey[400],
    },
    highlights: {
        color: highlight,
    },
    toolBar: {
        minHeight: '30px',
    },
    btn: {
        color: highlight,
        width: '250px',
        height: '50px',
        border: `2px solid ${highlight}`,
        borderRadius: '5px',
        [theme.breakpoints.down('sm')]: {
            width: '150px',
        }
    },
    vid: {
        minWidth: "100%",
        minHeight: "100%",
        position: "absolute",
        bottom: "0",
        right: "0",
        zIndex: "1",
        transform: "rotate(180deg)",
    },
    vidOverlay: {
        minWidth: "100%",
        minHeight: "100%",
        position: "absolute",
        top: "0",
        zIndex: "3",
        background: "#0a192f",
        opacity: "0.85",
    },
}));

const BackgroundVid = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.vidOverlay} />
            <video autoPlay loop muted className={classes.vid}>
                <source src="https://giant.gfycat.com/DearestCautiousGordonsetter.mp4" type="video/mp4"></source>
            </video>
        </Box>
    )
}

const Welcome = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} id={props.id}>
            <BackgroundVid />
            <Box container="true" display="flex" justifyContent="center" flexDirection="column"
                ml={{ xs: 1, sm: 5, md: 10 }}
                className={classes.container}
                id={props.id}>
                <Typography variant="h6">Hello, I am</Typography>
                <Typography variant="h2" className={classes.name}>Donald Labajo Jr.</Typography>
                <Toolbar className={classes.toolBar} />
                <Box maxWidth={{ xs: "95%", sm: "80%", md: "70%" }}>
                    <Typography variant="body1">I'm a
                        <Box component="span" fontStyle="italic"> Backend Developer using </Box>
                        <span className={classes.highlights}>Nodejs (Express.js Framework) and MongoDB. </span> Being an aspiring Fullstack developer, I am currently learning Frontend Technologies like <span className={classes.highlights}>React.js, Material-UI, styled-components</span> and more.
                    </Typography>
                </Box>
                <Toolbar className={classes.toolBar} />
                <Box component="span">
                    <Button color="primary" className={classes.btn} href={`mailto:${myEmail}`} > Get in Touch</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Welcome
