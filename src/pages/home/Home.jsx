/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import banner from "../../assets/images/home-banner.png";
import design1 from "../../assets/images/design1.png";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <>
      <section className="home-banner">
        <Fade>
          <div className="banner-wrapper">
            <img src={banner} alt="banner" loading="lazy" />
          </div>
        </Fade>
        <Box className="bg-theme tagline">
          <Container>
            <Box className="banner-text">
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item sm={7}>
                  <Fade left>
                    <Box className="left-side">
                      <Typography variant="h1" component="h1">
                        Powerful IT <br /> Solutions With Irah
                      </Typography>
                    </Box>
                  </Fade>
                </Grid>
                <Grid item sm={5}>
                  <Fade right cascade>
                    <div className="right-side">
                      <Typography variant="h6" component="h3" mb={2}>
                        We make it easy.
                      </Typography>
                      <Typography>
                        We are a team of talented developers, programmers, and
                        everything your tech requires.
                      </Typography>
                    </div>
                  </Fade>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
      <section className="about-section pt">
        <Container>
          <Fade up cascade>
            <div>
              <Typography component="h4" mb={2} color="#69E166">
                About us
              </Typography>
              <Typography variant="h6" component="p" color="#fff">
                Powerful IT Solutions With Irah. <br /> We are a team of
                talented developers, programmers, and everything your tech
                requires.
              </Typography>
            </div>
          </Fade>
        </Container>
      </section>
      <section className="innovation-section bg-dark pt">
        <img src={design1} alt="img" loading="lazy" className="design1" />
        <Container>
          <Fade up cascade>
            <div className="section-title">
              <Typography component="h2" mb={2}>
                Welcome to Our World of{" "}
                <span className="text-theme">Innovation!</span>
              </Typography>
              <Typography>
                We are not just a product company; we are a team of dreamers,
                creators, and problem solvers who dare to push boundaries and
                challenge the status quo.
              </Typography>
            </div>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default Home;
