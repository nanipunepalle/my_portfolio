import React from 'react';



import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
    avatar: {
        height: "250px",
        width: "250px",
        alignItems: "center",
        marginTop: theme.spacing(1)
    },
    leftBox: {
        [theme.breakpoints.up('md')]: {
            position: "fixed", width: "50%", marginTop: "100px"
        },
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.leftBox}>
                <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>
                    <Box display="flex" flexDirection="column" justifyContent="center">
                        <Box display="flex" justifyContent="center">
                            <Avatar className={classes.avatar} src="me.png" variant="square"></Avatar>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h5" >Hi there, </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h3" >I am Lalith</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h5">A bit about me</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" margin={2}>
                            <a href="https://github.com/nanipunepalle"><Avatar className={classes.iconAvatar} src={process.env.NODE_ENV === 'production' ? '/my_portfolio/github_logo.png' : '/github_logo.png'} ></Avatar></a>
                            <a href="https://linkedin.com/in/lalith-reddy-605480167"><Avatar className={classes.iconAvatar} src={process.env.NODE_ENV === 'production' ? '/my_portfolio/linkedin_logo2.png' : '/linkedin_logo2.png'} variant="square" style={{ margin: "0px 5px", backgroundColor: "#ffffff" }}></Avatar></a>
                            <a href="https://twitter.com/iamlalithreddy"><Avatar className={classes.iconAvatar} src={process.env.NODE_ENV === 'production' ? '/my_portfolio/twitter_logo.png' : '/twitter_logo.png'} variant="square" style={{ margin: "0px 5px", backgroundColor: "#ffffff" }}></Avatar></a>
                        </Box>
                    </Box>
                </Slide>
            </Box>
        </div>
    );
}