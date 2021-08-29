import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Divider } from '@material-ui/core';

import SectionTitle from '../layout/SectionTitle';

/* Import Jobs */
import { jobsArray } from '../../data';

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
        padding: "1.5rem"
    },
    timeline: {
        width: "100%"
    },
    divider: {
        backgroundColor: 'rgba(136, 146, 176, 0.5)',
        height: '2px',
        marginBottom: theme.spacing(2),
    },
}));

const JobTask = ({ task }) => {
    return (
        <Box display="flex" flexDirection="row">
            <KeyboardArrowRightIcon color="primary" />
            <Typography variant="subtitle1">{task}</Typography>
        </Box>
    )
}

const WorkItem = (props) => {
    const { title, company, tasks, icon } = props.workInfo;
    const classes = useStyles();

    const tasksList = tasks.map(task => <JobTask task={task} />)

    return (
        <React.Fragment>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            <Box fontWeight="fontWeightBold">
                                {title}
                            </Box>
                        </Typography>
                        <Typography variant="overline" > - {company}</Typography>
                        <Divider className={classes.divider} />
                        <Box display="flex" flexDirection="column">
                            {/* <JobTask tasks={tasks} /> */}
                            {tasksList}
                        </Box>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </React.Fragment>
    )
}

export default function Experience() {
    const classes = useStyles();
    const jobItems = jobsArray.map((job, index) => <WorkItem workInfo={job} key={index} />)

    return (
        <Box width="100%" pt={5} pb={10} px={{ xs: 1, sm: 2, md: 3, lg: 10 }}>
            <SectionTitle title="Experience" />
            <Box className={classes.container}>
                <Timeline align="alternate" className={classes.timeline}>
                    {jobItems}
                </Timeline>
            </Box>
        </Box>
    );
}
