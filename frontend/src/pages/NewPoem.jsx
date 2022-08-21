import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const styles = {
    root: {
        width: "100%",
        margin: "10px 0",
        padding: "10px 1rem",
        
        background: "rgba(0, 0, 0, 0.64)",
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8.9px)",
        webkitBackdropFilter: "blur(8.9px)",
        border: "1px solid rgba(0, 0, 0, 1)",
    },
    main: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    menu: {
        color: "#000000",
    }
};

const NewPoem = () => {
    const [verse, setVerse] = useState("lục bát");

    const handleChange = (event) => {
        setVerse(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements;
        const title = formElements.title.value;
        const type = verse;
        const description = formElements.description.value;
        const content = formElements.content.value;
        const poem = {
            title: title,
            type: type,
            description: description,
            content: content
        };
        try {
            await axios.post("/poems", poem);
            alert("Success!");
            formElements.title.value = "";
            setVerse("lục bát");
            formElements.description.value = "";
            formElements.content.value = "";
        } catch (err) {
            alert("Error!");
            console.error(err)
        }
    };

    return (
        <Grid sx={styles.root}>
            <form onSubmit={handleSubmit}>
            <Grid sx={styles.main}>
                <TextField sx={{ margin: "10px 0"}} name="title" required placeholder="Tên bài" />
                <Select value={verse} onChange={handleChange}>
                    <MenuItem sx={styles.menu} value="lục bát">Lục bát</MenuItem>
                    <MenuItem sx={styles.menu} value="thất ngôn tứ tuyệt">Thất ngôn tứ tuyệt</MenuItem>
                    <MenuItem sx={styles.menu} value="thất ngôn bát cú">Thất ngôn bát cú</MenuItem>
                    <MenuItem sx={styles.menu} value="song thất lục bát">Song thất lục bát</MenuItem>
                </Select>
                <TextField sx={{ margin: "10px 0"}} name="description" required placeholder="Giới thiệu" />
                <TextField sx={{ margin: "10px 0"}} name="content" multiline rows={4} required placeholder="Thơ ..." />
                <Button variant='contained' type="submit">Lưu</Button>
            </Grid>
            </form>
        </Grid>
    )
}

export default NewPoem