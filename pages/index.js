import Head from 'next/head'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Chip, Grid, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box'

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
    height: "150px",
    width: "150px",
    alignItems: "center",
    marginTop: theme.spacing(1)
  },
  projectsDiv: {
    margin: theme.spacing(10)
  },
  projectsPaper: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(4),
    boxShadow: "0px 1px 2px 0px white",
    '&:hover': {
      background: "rgb(256, 256, 256,0.3)",
    },
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
      <MenuItem>
        <IconButton aria-label="home" color="inherit">
          <Typography>Home</Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="skills" color="inherit">
          <Typography>Skills</Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="projects" color="inherit">
          <Typography>Projects</Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="gallery" color="inherit">
          <Typography>Gallery</Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="contact" color="inherit">
          <Typography>Contact</Typography>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <Head>
        <title>Lalith</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <AppBar position="sticky">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Lalith
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="home" color="inherit">
              <Typography>Home</Typography>
            </IconButton>
            <IconButton aria-label="skills" color="inherit">
              <Typography>Skills</Typography>
            </IconButton>
            <IconButton aria-label="projects" color="inherit">
              <Typography>Projects</Typography>
            </IconButton>
            <IconButton aria-label="projects" color="inherit">
              <Typography>Education</Typography>
            </IconButton>
            <IconButton aria-label="gallery" color="inherit">
              <Typography>Gallery</Typography>
            </IconButton>
            <IconButton aria-label="contact" color="inherit">
              <Typography>Contact</Typography>
            </IconButton>
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
        <Box >
          <Box display="flex" justifyContent="center">
            <Avatar className={classes.avatar} src="https://nanipunepalle.github.io/my_portfolio/me.jpg"></Avatar>

          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant="h3">Hi there, I am Lalith</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant="h5">A bit about me</Typography>
          </Box>
        </Box>
      </div>
      <div className={classes.projectsDiv}>
        <Typography style={{ margin: "5px" }}>Technical Skills</Typography>
        <Grid component="main" container spacing={2}>
          <Grid item xs={12} md={4}>
            <Chip label="Java Script" style={{ marginRight: "2px" }}></Chip>
            <Chip label="Python" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="Java" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="Swift" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="React.js" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="Node.js" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="MongoDB" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="SwiftUI" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="Flask" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="Web Development" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
            <Chip label="iOS App Development" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
          </Grid>

        </Grid>
      </div>
      <div className={classes.projectsDiv}>
        <Typography style={{ margin: "5px" }}>Projects</Typography>
        <Grid component="main" container spacing={2}>
          <Grid item xs={12} md={4}>
            <a href="https://ellipseapp.com" target="_blank">
              <Paper elevation={10} className={classes.projectsPaper}>
                <Typography variant="h5" >Ellipse Web Application</Typography>
                <Typography variant="body1" color="textSecondary" style={{ margin: "5px 0px" }}>Application to host and organize college events and hackathons</Typography>
                <Chip label="React.js" style={{ marginRight: "2px", marginTop: "2px" }}></Chip>
                <Chip label="Node.js"></Chip>
              </Paper>
            </a>
          </Grid>


        </Grid>
      </div>
    </div>
  );
}



