import { Grid, Typography } from '@mui/material';
import { PoemListDisplay } from '../components/Poem';

const styles = {
    root: {
        display: "flex",
        justifyContent: "center",
    }
}

const Home = (props) => {
    const { poems } = props;

    return (
        <Grid container spacing={0} sx={styles.root}>
            <Typography variant='h4'>Danh sách Thơ</Typography>
            <PoemListDisplay poems={poems} />
        </Grid>
  )
}

export default Home