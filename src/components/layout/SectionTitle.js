import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: 'rgba(136, 146, 176, 0.5)',
        height: '2px',
        width: "100%",
        maxWidth: theme.spacing(50),
    },
}))

const SectionTitle = ({ title = "" }) => {
    const classes = useStyles();

    return (
        <Box display="flex" mb={5}>
            <Typography variant="h4" component="span" className={classes.title}>{title.toUpperCase()}</Typography>
            <Box display="flex" flex="1" alignItems="center" ml={2}>
                <Divider className={classes.divider} />
            </Box>
        </Box>
    )
}

export default SectionTitle
