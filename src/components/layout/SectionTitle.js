import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: 'rgba(136, 146, 176, 0.5)',
        height: '2px',
        marginBottom: theme.spacing(5),
    },
}))

const SectionTitle = ({ title }) => {
    const classes = useStyles();

    return (
        <Box>
            <Typography variant="h3" >{title}</Typography>
            <Divider className={classes.divider} />
        </Box>
    )
}

export default SectionTitle
