import { useParams } from "react-router-dom";
import { Grid } from '@mui/material';
import { PoemDisplay } from '../components/Poem';

const PoemDisplayPage = (props) => {
  const { poems } = props;
  const { slug } = useParams();

  const poem = poems.find(item => item.slug === slug);

  return (
    <Grid container spacing={0}>
      <PoemDisplay poem={poem} />
    </Grid>
  )
}

export default PoemDisplayPage