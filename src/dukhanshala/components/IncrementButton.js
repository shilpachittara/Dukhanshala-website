import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  },
}));



export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
         <Grid container spacing={0} justifyContent="flex-end"> 
        <Grid item xs={12} style={{marginRight:'5px'}}>
        <ButtonGroup color="primary" aria-label="outlined primary button group" >
        <Button style={{width:"20px",height:'20px'}} >+</Button>
    
      </ButtonGroup>
      <ButtonGroup color="primary" aria-label="contained primary button group" style={{backgroundColor:'#3BB3A6'}}>
      <Button style={{width:"20px",height:'20px',}}  >1</Button>
  
      </ButtonGroup>
      <ButtonGroup color="primary" aria-label="outlined primary button group" >
      <Button style={{width:"20px",height:'20px'}} >-</Button>

      </ButtonGroup>
        </Grid>
        </Grid>
        
   
    </div>
  );
}