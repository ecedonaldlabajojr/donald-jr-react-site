import React from 'react';
import PropTypes from 'prop-types';
import withWidth from "@material-ui/core/withWidth";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Divider } from '@material-ui/core';
import { useEffect } from 'react'

import SectionTitle from '../layout/SectionTitle';

/* Import Jobs */
import { jobsArray } from '../../data';
/*    */

/* Import Job Icons */
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import ComputerIcon from '@material-ui/icons/Computer';
/*    */

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        maxWidth: "95%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
    },
    paper: {
        color: theme.palette.grey[900],
        background: "#a8b2d1",
        padding: "1.5rem",
        textAlign: "left"
    },
    timeline: {
        width: "100%"
    },
    divider: {
        backgroundColor: 'rgba(136, 146, 176, 0.5)',
        height: '2px',
        marginBottom: theme.spacing(2),
    },
    task: {
        "&:not(:last-child)": {
            color: "primary",
            marginBottom: "10px",
        }
    },
    timelineItem: {
        "&::before": {
            [theme.breakpoints.down('md')]: {
                display: "none",
            }
        }
    }
}));

const workIconsMap = {
    code: <CodeIcon />,
    build: <BuildIcon />,
    computer: <ComputerIcon />
}

const TaskItem = ({ task, }) => {
    const classes = useStyles();
    return (
        <Box display="flex" flexDirection="row" className={classes.task}>
            <ArrowRightIcon color="primary" fontSize="medium" />
            <Typography variant="subtitle2">
                <Box lineHeight="1.3">{task}</Box>
            </Typography>
        </Box>
    )
}

const WorkItem = (props) => {
    const { title, company, tasks, icon, role = null, duration } = props.workInfo;
    const classes = useStyles();

    const workList = tasks.map((task, index) => <TaskItem task={task} key={index} />)

    return (
        <React.Fragment>
            <TimelineItem className={classes.timelineItem}>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        {workIconsMap[icon]}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1" align="center">
                            <Box fontWeight="fontWeightBold">
                                {title.toUpperCase()}
                            </Box>
                        </Typography>
                        {role && <Typography variant="subtitle2" component="div" align="center">{role}</Typography>}
                        <Typography variant="overline" component="h5" align="center">
                            <Box fontSize="14px" display="flex" alignItems="center" justifyContent="center" lineHeight="1.2" mb={1}>
                                <WorkOutlineIcon /> &nbsp;{company} ({duration})
                            </Box>
                        </Typography>
                        <Divider className={classes.divider} />
                        <Box display="flex" flexDirection="column">
                            {workList}
                        </Box>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </React.Fragment>
    )
}

function Experience(props) {
    const classes = useStyles();
    const jobItems = jobsArray.map((job, index) => <WorkItem workInfo={job} key={index} />)
    const isMobile = /xs|sm|md/.test(props.width);

    return (
        <Box width="100%" pt={10} pb={10} px={{ xs: 1, sm: 2, md: 3, lg: 10 }} id={props.id}>
            <SectionTitle title="Experience" />
            <Box className={classes.container}>
                <Timeline align={isMobile ? "left" : "alternate"} className={classes.timeline} >
                    {jobItems}
                </Timeline>
            </Box>
        </Box>
    );
}

Experience.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default withWidth()(Experience);
