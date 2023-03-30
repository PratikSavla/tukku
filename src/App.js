import React from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ContainerMain from "./components/ContainerMain";
import Navbar from './components/Navbar';

function App() {
  return (
      <Grid container spacing={2} color={"gray"}>
        <Grid item xs={12}>
        <Navbar />
        </Grid>
        <Grid item xs={8}>
          <Paper>
          <Grid container spacing={2}>
          {
            [1,2,3,4,5].map(i => { return (
            <Grid item xs={4}><ContainerMain data={i} key={i}/>
            </Grid>
            )})
          }
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
          <Typography>Hello</Typography>
          </Paper>
        </Grid>
      </Grid>
  );
}

export default App;