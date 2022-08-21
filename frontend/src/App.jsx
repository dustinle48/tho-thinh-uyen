import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Grid } from '@mui/material';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header/Header';
import Home from "./pages/Home";
import PoemDisplayPage from './pages/PoemDisplayPage';
import NewPoem from './pages/NewPoem';

import { theme } from "./themes/theme";
import Background from "./assets/Sunset.jpg";

const styles = {
  root: {
    background: `url(${Background}) center no-repeat fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
  }
};

function App() {
  const [poems, setPoems] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/poems");
      console.log(data);
      setPoems(() => [...data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid sx={styles.root}>
        <Header />
        <Grid container spacing={0} >
          <Grid item lg={4} md={3} sm={0} xs={0} />
          <Grid item container spacing={0} lg={4} md={6} sm={12} xs={12} >
            <Routes>
              <Route path="/" element={ <Home poems={poems} /> } />
              <Route path="/poem/:slug" element={ <PoemDisplayPage poems={poems} /> } />
              <Route path="/new" element={ <NewPoem /> } />
            </Routes>
          </Grid>
          <Grid item lg={4} md={3} sm={0} xs={0} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
