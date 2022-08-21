import { Link } from "react-router-dom";
import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";

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
    title: {
        fontWeight: "bold",
    }
};

const PoemItem = (props) => {
    const { poem } = props; 

    return (
        <Box sx={styles.root}>
            <Link to={`/poem/${poem.slug}`} style={{ textDecoration: "none" }}>
                <Typography sx={styles.title} variant="h5" color="secondary">{ poem.title }</Typography>
            </Link>
            <Chip variant='outlined' label={ poem.type.toUpperCase() } size="small" />
            <Typography variant="subtitle2">{ moment(poem.createdAt).format('MMM Do YYYY') } - { poem.description }</Typography>
        </Box>
    )
}

export default PoemItem