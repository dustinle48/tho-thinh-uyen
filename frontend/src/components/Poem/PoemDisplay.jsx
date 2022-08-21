import { Chip, Grid, Typography } from '@mui/material';
import moment from 'moment';

const styles = {
  root: {
    width: "100%",
    minHeight: "80px",
    margin: "10px 0",
    padding: "6px 1rem",
    
    background: "rgba(0, 0, 0, 0.64)",
    borderRadius: "10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(8.9px)",
    webkitBackdropFilter: "blur(8.9px)",
    border: "1px solid rgba(0, 0, 0, 1)",
  },
  content: {
    margin: "30px 0",
    whiteSpace: "pre-line",
  }
};

const PoemDisplay = (props) => {
  const { poem } = props;

  return (
    <Grid spacing={0} sx={styles.root}>
      <Typography variant="h5">{ poem.title }</Typography>
      <Chip variant='outlined' label={ poem.type.toUpperCase() } />
      <Typography>{ moment(poem.createdAt).format('MMM Do YYYY') } - { poem.description }</Typography>
      <Typography variant="body1" sx={styles.content}>{ poem.content }</Typography>
    </Grid>
  )
}

export default PoemDisplay