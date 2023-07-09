import React from "react";
import "./blog.css";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import BlogCard from "../../components/Blog-card/BlogCard";
import blogData from "../../apis/blogData";
import blog_img from "../../assets/images/blog-side.png";
import blog_hero from "../../assets/images/blog-hero.png";
import strategy from "../../assets/icons/strategy.svg";
import growth from "../../assets/icons/growth.svg";
import talent from "../../assets/icons/talent.svg";
import { Fade, Zoom, Slide } from "react-reveal";
import Matrix from "../../components/Matrix";

const Blogs = () => {
  const strategyData = [
    {
      id: 1,
      icon: strategy,
      title: "Product Strategy",
    },
    {
      id: 2,
      icon: growth,
      title: "Growth Monetisation",
    },
    {
      id: 3,
      icon: talent,
      title: "Talent Solutions",
    },
  ];

  return (
    <>
      <section className="common-banner blog-hero pt pb">
        <Matrix />
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            flexDirection={{ xs: "column-reverse", md: "row" }}
          >
            <Grid item md={6}>
              <Box className="left-side">
                <Slide up cascade>
                  <div>
                    <Typography component="h2" mb={2}>
                      <span className="text-theme"> Build & Scale </span>
                      Innovate, with Us,
                    </Typography>
                    <Typography>
                      Pantheon provides On Demand Products & Growth expertise to
                      fast growing technology Startups.
                    </Typography>
                    <Typography mt={2}>
                      SS provides On Demand Products & Growth expertise to fast
                      growing technology Startups.
                    </Typography>
                    <Button>Schedule an introductory call</Button>
                  </div>
                </Slide>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  gap={3}
                >
                  {strategyData?.map(({ id, icon, title }) => (
                    <div className="strategy-box" key={id}>
                      <Zoom>
                        <span className="icon">
                          <img src={icon} alt="icon" loading="lazy" />
                        </span>
                      </Zoom>
                      <Fade up>
                        <Typography>{title}</Typography>
                      </Fade>
                    </div>
                  ))}
                </Stack>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Fade up>
                <Box className="right-side">
                  <img src={blog_hero} alt="img" loading="lazy" />
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="blogs-section  bg-dark pt pb">
        <Container>
          <Box>
            <Zoom>
              <Typography
                component={"h3"}
                color={"#6DEB6A"}
                mb={5}
                textAlign="center"
              >
                Blog
              </Typography>
            </Zoom>
            <Box>
              {blogData?.map((blogData, index) => (
                <BlogCard
                  key={blogData.id}
                  blogData={blogData}
                  flexCoulum={index % 2 === 0 ? true : false}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </section>
      <section className="blog-deatail pt pb">
        <Container>
          <Box>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item sm={6}>
                <Zoom>
                  <div className="img-wrapper">
                    <img src={blog_img} alt="blog img" loading="lazy" />
                  </div>
                </Zoom>
              </Grid>
              <Grid
                item
                sm={6}
                sx={{ paddingLeft: { sm: "50px !important", xs: 0 } }}
              >
                <Fade right cascade>
                  <div className="right-content">
                    <Typography component={"h4"} mb={3} color="#6DEB6A">
                      Loren Ipsum
                    </Typography>
                    <Typography component={"p"}>
                      We specialise in building actionable product strategy for
                      B2C, B2B SaaS, B2B2C, Web3 & Deep Tech products. A typical
                      Product Strategy engagement includes the following
                      deliverables We specialise in building actionable product
                      strategy for B2C, B2B SaaS, B2B2C, Web3 & Deep Tech
                      products. A typical Product Strategy engagement includes
                      the following deliverables We specialise in building
                      actionable product strategy for B2C, B2B SaaS, B2B2C, Web3
                      & Deep Tech products. A typical Product Strategy
                      engagement includes the following deliverables
                    </Typography>
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
