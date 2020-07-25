import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '60ch',
    backgroundColor: theme.palette.background.paper
  },
  container: {
    backgroundImage : "url(https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Simple-White-Gradient-Background-Image.jpg)",
    color : "#000000",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  adjust:{
    width:"40%"
  },
  title: {
    fontSize: 24,
    fontFamily: "Papyrus",
    fontStyle: "bold"
  },
  body: {
    fontSize: 19,
    fontFamily: "Lucida Sans Typewriter"
  },
  link: {
    fontSize: 12,
    fontFamily: "Times New Roman",
    color: "brown"
  },
}));
<CssBaseline/> 


export default function SearchResults({ServiceRequest}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className = {classes.adjust}>
        <Typography>
          <List>
            <ListItem alignItems="flex-start">
              <Card className={classes.root}>
                <CardContent className={classes.container} > 
                  <Avatar alt= {ServiceRequest[0].businessName} src = {ServiceRequest[0].businessImage} className={classes.large} variant="rounded"/>
                  <Typography className ={classes.title} >
                    <center>{ServiceRequest[0].businessName}</center>
                  </Typography>
                  <Typography className={classes.body}>
                  {ServiceRequest[0].businessLocation}
                  </Typography>
                  <Typography className={classes.body}>
                    {ServiceRequest[0].businessContact}
                  </Typography>
                  <break>
                    <Button className={classes.link} color="#e7e7e7" href = {ServiceRequest[0].businessLink}>Go to website</Button>
                  </break>
                </CardContent>
              </Card>  
            </ListItem>


            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <Card className={classes.root}>
                <CardContent className={classes.container}>
                  <Avatar alt= {ServiceRequest[1].businessName} src = {ServiceRequest[1].businessImage} className={classes.large} variant="rounded"/>
                  <Typography className ={classes.title}>
                    <center>{ServiceRequest[1].businessName}</center>
                  </Typography>
                  <Typography className={classes.body} >
                  {ServiceRequest[1].businessLocation}
                  </Typography>
                  <Typography className={classes.body} >
                    {ServiceRequest[1].businessContact}
                  </Typography>
                  <break>
                    <Button className={classes.link} color = "#e7e7e7" href = {ServiceRequest[1].businessLink}  >Go to website</Button>
                  </break>
                </CardContent>
              </Card>  
            </ListItem>


            <Divider variant="inset" component="li"/>
            <ListItem alignItems="flex-start">
              <Card className={classes.root}>
                <CardContent className={classes.container}>
                  <Avatar alt= {ServiceRequest[2].businessName} src = {ServiceRequest[2].businessImage} className={classes.large} variant="rounded"/>
                  <Typography className ={classes.title}>
                    <center>{ServiceRequest[2].businessName}</center>
                  </Typography>
                  <Typography className={classes.body} >
                  {ServiceRequest[2].businessLocation}
                  </Typography>
                  <Typography className={classes.body}>
                    {ServiceRequest[2].businessContact}
                  </Typography>
                  <break>
                    <Button className={classes.link} color="#e7e7e7" href = {ServiceRequest[2].businessLink} >Go to website</Button>
                  </break>
                </CardContent>
              </Card>  
            </ListItem>
          </List>
        </Typography>
      </Container>
    </React.Fragment>
        );
}