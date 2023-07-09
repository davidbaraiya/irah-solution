import React from "react";
import "./common_banner.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import Matrix from "../Matrix";

const CommonBanner = ({ heroDetail }) => {
  const { heroImg, title, description } = heroDetail;
  return (
    <section className="common-banner pt pb">
      <Matrix />
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          flexDirection={{ xs: "column-reverse", sm: "row" }}
        >
          <Grid item sm={6}>
            <Fade left cascade>
              <div className="left-side">
                <Typography component="h2" mb={2}>
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </div>
            </Fade>
          </Grid>
          <Grid item sm={6}>
            <Fade>
              <Box className="right-side">
                <img src={heroImg} alt="img" loading="lazy" />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CommonBanner;
