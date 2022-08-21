import { AppBar, Grid, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const Header = () => {
  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <Grid container spacing={0}>
          <Grid item lg={4} md={3} sm={0} xs={0} />
          <Grid container item lg={4} md={6} sm={12} xs={12} sx={styles.main}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography>Thơ Thịnh Uyên</Typography>
            </Link>
            <Link to="/new" style={{ textDecoration: "none" }}>
              <Typography>Bài mới</Typography>
            </Link>
          </Grid>
          <Grid item lg={4} md={3} sm={0} xs={0} />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header