import { AppBar, Avatar, Box, Grid, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import AvatarImg from "../../assets/map.png";

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
};

const Header = () => {
  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <Grid container spacing={0}>
          <Grid item lg={4} md={3} sm={0} xs={0} />
          <Grid container item lg={4} md={6} sm={12} xs={12} sx={styles.main}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box sx={styles.box}>
                <Avatar alt="avatar" src={AvatarImg} sx={{ marginRight: "0.6rem" }} />
                <Typography sx={{ fontWeight: "bold" }}>Thơ Thịnh Uyên</Typography>
              </Box>
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