import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

/* Material UI Icons */
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
/* -------------------- */

/* Socia Media URLS */
const { fbURL, linkedInURL, githubURL } = require('../../data')
/* -------------------- */

const highlight = '#64ffda';
const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        right: "1%",
        bottom: "0",
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            left: "0",
            right: "0",
            padding: "8% 30% 2%",
        },
    },
    icon: {
        margin: 10,
        color: '#8892b0',
        "&:hover": {
            color: highlight,
            cursor: "pointer"
        }
    },
    divider: {
        backgroundColor: theme.palette.grey[300],
        width: "1px",
        height: "7rem",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    iconWrapper: {
        flexGrow: "1",
        display: "flex",
        justifyContent: "center"
    },
    iconsContainer: {
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "row",
        },
    }
}))

const SocialMediaIcons = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box gap={25} className={classes.iconsContainer}>
                <Box button="true" component="a" href={fbURL} target="_blank" className={classes.iconWrapper}>
                    <FacebookIcon fontSize="large" className={classes.icon} />
                </Box>
                <Box button="true" component="a" href={githubURL} target="_blank" className={classes.iconWrapper}>
                    <GitHubIcon fontSize="large" className={classes.icon} />
                </Box>
                <Box button="true" component="a" href={linkedInURL} target="_blank" className={classes.iconWrapper}>
                    <LinkedInIcon fontSize="large" className={classes.icon} />
                </Box>
                <Divider orientation="vertical" className={classes.divider} />
            </Box>
        </Box>
    )
}

const year = new Date().getFullYear();
const Signature = () => {
    return (
        <Typography align="center" style={{ marginBottom: "20px", fontStyle: "italic" }}>
            Designed and Built by Donald Labajo Jr. ©{year}
        </Typography>
    )
}

const Footer = () => {
    return (
        <React.Fragment>
            <SocialMediaIcons />
            <Signature />
        </React.Fragment>
    )
}

export default Footer
