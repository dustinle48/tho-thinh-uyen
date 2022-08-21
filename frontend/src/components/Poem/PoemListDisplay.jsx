import { Grid, Typography } from "@mui/material";
import { PoemItem } from "./index";

const styles = {
    root: {
        display: "flex",
        justifyContent: "center"
    }
}

const PoemListDisplay = (props) => {
    const { poems } = props;

    return (
        <Grid container sx={styles.root}>
        { poems ? (
            poems.map(poem => (
                <PoemItem key={poem._id} poem={poem} />
            ))
        ) : (
            <Typography>No poem</Typography>
        )}
        </Grid>
    )
}

export default PoemListDisplay