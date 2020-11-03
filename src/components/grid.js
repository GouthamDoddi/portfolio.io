import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PictureCard from './pictureCard';
import { AllSkills1, AllSkills2 } from './accordionData';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:30
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const Layout = () => {
      const classes = useStyles();


    return (
        <div>
            <Container>
            <Typography component="div" style={{ backgroundColor: '#f0efeb', height: '100%' }} >
                <Grid container spacing={2} fixed className={classes.grid}>
                    <Grid item xs={12} md={6} >
                        {/* <Paper style={{'marginTop':'2em', 'marginLeft':'2em',  'height': '25em', 'width': '90%', 'background': '#e63946' }} id='paper' variant="outlined" square >  */}
                             <img src="/images/IMG_5910[183] .jpg" alt="boohoo" className="img-responsive" style={{ 'marginTop':'2em',  'marginLeft':'2em', 'height': '90%', 'width': '90%'  }} />
                        {/* </Paper> */}
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Paper style={{ 'marginTop':'2em', 'marginLeft':'2em',  'height': '25em', 'width': '90%', 'background': '#021C0E' }} id='paper' variant="outlined" square > 
                            <span id='skillshead'>Skills I posses.</span>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6} >
                                    
                                        <AllSkills1 />

                                </Grid>
                                <Grid item xs={6} md={6} >

                                        <AllSkills2 style={{height:'90%', weight: '90%'}} />

                                </Grid>
                            </Grid>
                        </Paper>
        
                    </Grid>
                    <Grid item xs={6} md={4} >
                        <PictureCard />
                    </Grid>
                    <Grid item xs={6} md={4} >
                        <PictureCard />
                    </Grid>
                    <Grid item xs={6} md={4} >
                        <PictureCard />
                    </Grid>
                    <Grid item xs={6} md={4} >
                        <PictureCard />
                    </Grid>
                    <Grid item xs={6} md={4} >
                        <PictureCard />
                    </Grid>
                    <Grid item xs={6} md={4} >
                        <PictureCard />
                    </Grid>
                    

                </Grid>
            </Typography>
            </Container>
        </div>)
}

export default Layout;