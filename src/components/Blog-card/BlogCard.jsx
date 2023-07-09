import "./blog_card.css";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Zoom, Fade } from "react-reveal";
const BlogCard = ({ blogData, flexCoulum }) => {
  const { title, description, image } = blogData;

  return (
    <Box className="blog-card" flexDirection={flexCoulum ? "" : "row-reverse"}>
      <Fade up>
        <div className="img-wrapper">
          <img src={image} alt="img" loading="lazy" />
        </div>
      </Fade>
      <div className="blog-content">
        <Fade up>
          <Typography component={"h3"} color="#6DEB6A" mb={2}>
            {title}
          </Typography>
        </Fade>
        <Fade up>
          <div className="para-div">
            <Typography component={"p"}>{description}</Typography>
          </div>
        </Fade>
      </div>
    </Box>
  );
};

export default BlogCard;
