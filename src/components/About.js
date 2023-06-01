import React from "react";

function About({image="https://via.placeholder.com/215",alt,about}) {
  return (
    <aside id="myabout">
      <img src={image} alt={alt} />
      <p>{about} </p>
    </aside>
  );
}

export default About;
