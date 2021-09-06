import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import InputTitle from '../layout/SectionTitle';

/* Import Projects Icons */
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
/*    */

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '1200px',
    },
    card: {
        background: '#112240',
        color: '#8892b0',
        padding: '10px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: '0.1s all ease-out',
        border: '1px solid #112240',
        '&:hover': {
            transform: 'translateY(-5px)',
            border: '1px solid #64ffda',
        },
    },
    projectLinks: {
        marginBottom: theme.spacing(1),
    },
    cardContent: {
        height: '100%',
    },
    cardTitle: {
        color: theme.palette.grey[100],
    },
    techs: {
        color: theme.palette.grey[300],
    },
    btn: {
        color: '#8892b0',
        "&:hover": {
            color: '#64ffda',
        }
    },
    projOngoing: {
        background: '#8892b0',
        '&:disabled': {
            color: theme.palette.grey[800],
            border: '1px solid #8892b0',
        },
    },
}));

const ProjectItem = ({ proj }) => {
    const classes = useStyles();

    const projectOngoing = !proj.github || !proj.link;
    let projectLinks = <Button size="small" variant="outlined" disabled fullWidth className={classes.projOngoing}>ONGOING DEVELOPMENT</Button>
    if (!projectOngoing) {
        projectLinks =
            <Box>
                <Link href={proj.github} className={classes.btn} target="_blank"><GitHubIcon /></Link>
                <Box ml={2} component="span">
                    <Link href={proj.link} className={classes.btn} target="_blank"><OpenInNewIcon /></Link>
                </Box>
            </Box>
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <CardActions className={classes.projectLinks}>
                    {projectLinks}
                </CardActions>
                <Typography variant="h5" component="h2" paragraph className={classes.cardTitle}>
                    {proj.name}
                </Typography>
                <Typography variant="body2" component="p" paragraph>
                    {proj.description}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="overline" className={classes.techs} >{proj.techs.join(", ")}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default function Projects(props) {
    const projectsList = props.projects.map(proj => {
        return (
            <Grid item xs={12} sm={6} lg={4} key={proj.name}>
                <ProjectItem proj={proj} />
            </Grid>
        )
    })

    return (
        <Box width="100%" pt={10} pb={10} px={{ xs: 1, sm: 2, md: 3, lg: 10 }} id={props.id} mb={3}>
            <InputTitle title="Projects" />
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {projectsList}
                </Grid>
            </Container>
        </Box>
    );
}
