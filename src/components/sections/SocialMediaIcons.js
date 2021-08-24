import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'

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
        right: "1%",
        bottom: "0",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
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
    }
}))

const SocialMediaIcons = () => {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={25} className={classes.root}>
            <Box button="true" component="a" href={fbURL} target="_blank">
                <FacebookIcon fontSize="large" className={classes.icon} />
            </Box>
            <Box button="true" component="a" href={githubURL} target="_blank">
                <GitHubIcon fontSize="large" className={classes.icon} />
            </Box>
            <Box button="true" component="a" href={linkedInURL} target="_blank">
                <LinkedInIcon fontSize="large" className={classes.icon} />
            </Box>
            <Divider orientation="vertical" className={classes.divider} />
        </Box>
    )
}

export default SocialMediaIcons
