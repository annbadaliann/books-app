import React from "react";
import BookLover from "../../assets/images/book.svg";
import useStyles from "./style";

function About() {
  const classes = useStyles();
  return (
    <div>
      <h2>About</h2>
      <div className={classes.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas
          repudiandae incidunt voluptate id, quam sunt dicta ipsa, ullam eum
          dignissimos explicabo, corporis quis. Cupiditate deleniti impedit
          distinctio quia quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas
          repudiandae incidunt voluptate id, quam sunt dicta ipsa, ullam eum
          dignissimos explicabo, corporis quis. Cupiditate deleniti impedit
          distinctio quia quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas
          repudiandae incidunt voluptate id, quam sunt dicta ipsa, ullam eum
          dignissimos explicabo, corporis quis. Cupiditate deleniti impedit
          distinctio quia quidem.
        </p>
        <img src={BookLover} className={classes.img} />
      </div>
    </div>
  );
}

export default About;
