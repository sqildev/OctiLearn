import React from "react";

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.data.map(course => {
          return (
              <div><h1>{course.attributes.title}</h1>
              <p>{course.attributes.description}</p></div>
          )
      })}
    </div>
  );
};

export default Courses;