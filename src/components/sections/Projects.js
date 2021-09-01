import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import WebAssetOutlinedIcon from '@material-ui/icons/WebAssetOutlined';
import Box from '@material-ui/core/Box';

import InputTitle from '../layout/SectionTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '1200px',
    },
    card: {
        height: 250,
        background: '#112240',
        color: '#8892b0',
        padding: '10px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const projectsArr = [
    {
        name: 'Cafe di Vincenzo',
        description: 'Coffee shop website using React.js, CSS Module and React-Context',
        github: 'https://github.com/ecedonaldlabajojr/react-cafe-vincenzo',
        link: 'https://react-vincenzo.web.app/',
    },
    {
        name: 'Personal Site v1.0',
        description: 'My very first personal website. Humbly built with JS, Bootstrap4, Jquery and MailChimp API for storing messages.',
        github: 'https://github.com/ecedonaldlabajojr/Portfolio',
        link: 'https://donaldjr-website.herokuapp.com/',
    },
    {
        name: 'Tsuya.ph',
        description: 'Online shopping cart, using Full MERN Stack.',
        github: 'available soon',
        link: 'available soon',
    },
];


const ProjectItem = ({ proj }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <WebAssetOutlinedIcon />
                <Typography variant="h5" component="h2" paragraph>
                    {proj.name}
                </Typography>
                <Typography variant="body2" component="p" paragraph>
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" color="primary">View Code</Button>
            </CardActions>
        </Card>
    );
}


export default function Projects() {
    const classes = useStyles();
    const projectsList = projectsArr.map(proj => {
        return (
            <Grid item xs={12} sm={6} md={4} key={proj.name}>
                <ProjectItem proj={proj} />
            </Grid>
        )
    })

    return (
        <Box width="100%" pt={10} pb={10} px={{ xs: 1, sm: 2, md: 3, lg: 10 }}>
            <InputTitle title="Projects" />
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {projectsList}
                </Grid>
            </Container>
        </Box>
    );
}
