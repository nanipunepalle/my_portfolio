import Head from 'next/head'
import React from 'react';

//materialui icons
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';

import LeftProfilePanel from '../Components/LeftProfilePanel';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'block',
        marginLeft: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },

    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
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
    iconAvatar: {
        height: "25px",
        width: "25px"
    },
    imagesPaper: {
        backgroundColor: theme.palette.primary.main
    }

}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };



    const mobileMenuId = 'menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <a href={process.env.NODE_ENV === 'production' ? '/my_portfolio' : "/"}>
                <MenuItem>
                    <IconButton aria-label="home" color="inherit">
                        <Typography>Home</Typography>
                    </IconButton>
                </MenuItem>
            </a>
            <a href="#techdiv">
                <MenuItem>
                    <IconButton aria-label="skills" color="inherit">
                        <Typography>Skills</Typography>
                    </IconButton>
                </MenuItem>
            </a>
            <a href="#projectsdiv">
                <MenuItem>
                    <IconButton aria-label="projects" color="inherit">
                        <Typography>Projects</Typography>
                    </IconButton>
                </MenuItem>
            </a>
            <a href="#educationdiv">
                <MenuItem>
                    <IconButton aria-label="education" color="inherit">
                        <Typography>Education</Typography>
                    </IconButton>
                </MenuItem>
            </a>
            <a href={process.env.NODE_ENV === 'production' ? '/my_portfolio' : "/"}>
                <MenuItem>
                    <IconButton aria-label="gallery" color="inherit">
                        <Typography>Gallery</Typography>
                    </IconButton>
                </MenuItem>
            </a>
            <a href="#contactdiv">
                <MenuItem>
                    <IconButton aria-label="contact" color="inherit">
                        <Typography>Contact</Typography>
                    </IconButton>
                </MenuItem>
            </a>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <Head>
                <title>Lalith</title>
            </Head>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Lalith
                   </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <a href={process.env.NODE_ENV === 'production' ? '/my_portfolio' : "/"}>
                            <IconButton aria-label="home" color="inherit">
                                <Typography>Home</Typography>
                            </IconButton>
                        </a>
                        <a href="#techdiv">
                            <IconButton aria-label="skills" color="inherit">
                                <Typography>Skills</Typography>
                            </IconButton>
                        </a>
                        <a href="#projectsdiv">
                            <IconButton aria-label="projects" color="inherit">
                                <Typography>Projects</Typography>
                            </IconButton>
                        </a>
                        <a href="#educationdiv">
                            <IconButton aria-label="projects" color="inherit">
                                <Typography>Education</Typography>
                            </IconButton>
                        </a>
                        <a href="#projectsdiv">
                            <IconButton aria-label="gallery" color="inherit">
                                <Typography>Gallery</Typography>
                            </IconButton>
                        </a>
                        <a href="#contactdiv">
                            <IconButton aria-label="contact" color="inherit">
                                <Typography>Contact</Typography>
                            </IconButton>
                        </a>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            <div>
                <Grid container component="main">
                    <Grid item xs={12} md={5} >
                        <LeftProfilePanel></LeftProfilePanel>
                    </Grid>
                    <Slide direction="up" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <Grid item xs={12} md={7}>
                            {["image3.jpg", "image2.jpg", "image1.png", "image4.jpg"].map((value, index) => {
                                return <Paper style={{ margin: "50px" }} className={classes.imagesPaper}>
                                    <Box display="flex" justifyContent="flex-end" padding={2}>
                                        <a href={process.env.NODE_ENV === 'production' ? `/my_portfolio/${value}` : `/${value}`} download>DOWNLOAD</a>
                                    </Box>
                                    <img src={process.env.NODE_ENV === 'production' ? `/my_portfolio/${value}` : `/${value}`} style={{ height: "100%", width: "100%" }}></img>
                                </Paper>
                            })}
                        </Grid>
                    </Slide>
                </Grid>
            </div>
        </div>
    );
}



