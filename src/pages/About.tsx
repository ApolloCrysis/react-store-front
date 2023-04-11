import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography fontWeight={700} variant="h3" gutterBottom>
        Hi! I'm Dirk, Software Developer
      </Typography>

      <Typography variant="h5">
        This project was built using React, Material UI and Typescript
      </Typography>
    </Box>
  );
};

export default About;
