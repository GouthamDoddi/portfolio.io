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
                             <img src="https://scontent.fvtz2-1.fna.fbcdn.net/v/t31.0-8/28616498_1720256778029865_7749709674862108545_o.jpg?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=IylOtSHkZvAAX_jME2J&_nc_ht=scontent.fvtz2-1.fna&oh=e79252246a808518eece9e495706468e&oe=5FC82F24" alt="boohoo" className="img-responsive" style={{ 'marginTop':'2em',  'marginLeft':'2em', 'height': '90%', 'width': '90%'  }} />
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