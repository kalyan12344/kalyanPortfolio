import React from "react";
import { useState, useEffect, useRef } from "react";
import "../Styling/projects.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const Projects = () => {
  const projects = [
    {
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      title: "MovieMix",
      description: "Online movie ticket booking app",
    },
    {
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      title: "MovieMix2",
      description: "Online movie ticket booking app",
    },
    {
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      title: "MovieMix3",
      description: "Online movie ticket booking app",
    },
    {
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      title: "MovieMix4",
      description: "Online movie ticket booking app",
    },
    {
      img: "data:image/jpeg;base64,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",
      title: "MovieMix5",
      description: "Online movie ticket booking app",
    },
  ];

  function Item(props) {
    return (
      <Paper className="paper  ">
        <img className="proj-img" src={props.item.img} />
        <h2 className="proj-title">{props.item.title}</h2>
        <p className="proj-desc">{props.item.description}</p>
      </Paper>
    );
  }

  return (
    <div className="projects">
      <h1>Projects</h1>
      <Carousel className="projs">
        {projects.map((p) => (
          <Item className="project" item={p}></Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
