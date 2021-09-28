import React from 'react';
import "./App.css";
import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "lightblue" }}
        >
          <Profile />
        </Grid>
        <Grid
          item
          xs style={{ backgroundColor: "blue" }}
        >
          <Portfolio />
          <Resume />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
