import { Card, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import aboutImage from "../../public/images/aboutImage.jpg";

const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <CardMedia
            component="img"
            height="auto"
            image={aboutImage}
            alt="Image"
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Typography fontWeight={700} variant="h3" gutterBottom>
          Hi! I'm Dirk van Dyk, Software Developer
        </Typography>
        <Typography variant="h5">
          This project was built using React, Material UI and Typescript
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
