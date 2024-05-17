import React from "react";
import { useState, useEffect, useRef } from "react";
import "../Styling/projects.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import tick from "../tick.png";
import portfolio from "../portfolio.png";
import edith from "../Edith.png";
import echohire from "../echohire.png";

const Projects = () => {
  const projects = [
    {
      img: echohire,
      title: "EchoHire",
      description:
        "A web application that connects job seekers with employers.",
      link: "https://echohire-se-tinycoders-project.azurewebsites.net/",
    },
    {
      img: portfolio,
      title: "Portfolio",
      description: "My Portfolio",
      link: "https://kalyan12344.github.io/kalyan-portfolio/",
    },
    {
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      title: "MovieMixx",
      description: "Online movie ticket booking app",
    },

    {
      img: tick,
      title: "TickTick",
      description: "A todo list application that stores users data and tasks",
      link: "https://kalyan12344.github.io/Tick-Tick/",
    },
    {
      img: edith,
      title: "Edith",
      description: "A simple chatbot built using openAI api",
      link: "https://kalyan12344.github.io/Edith/",
    },
  ];

  const handleItemClick = (link) => {
    console.log(link);
    window.open(link, "_blank");
  };
  function Item(props) {
    return (
      <Paper className="paper  ">
        <img
          className="proj-img"
          onClick={() => handleItemClick(props.item.link)}
          src={props.item.img}
        />
        <h2 className="proj-title">{props.item.title}</h2>
        <p className="proj-desc">{props.item.description}</p>
      </Paper>
    );
  }

  return (
    <div className="projects">
      <h1>Projects</h1>
      <Carousel className="projs">
        {projects.map((p, i) => (
          <Item key={i} className="project" item={p} clickable={false}></Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
