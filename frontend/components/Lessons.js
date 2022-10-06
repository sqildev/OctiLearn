import React from 'react';

const Lessons = ({ lessons }) => {
  return (
    <div>
      {lessons.data.map((lesson, i) => {
          return (
              <div key={i}>
                <h1 className="text-3xl font-bold">{lesson.attributes.title}</h1>
                <p>{lesson.attributes.description}</p>
              </div>
          )
      })}
    </div>
  );
};

export default Lessons;