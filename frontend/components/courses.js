import axios from 'axios';
import {useRouter} from 'next/router';
import React from 'react';

const Courses = ({ courses }) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const router = useRouter();

  const addCourse = () => {
    axios.post('http://localhost:1337/api/courses', {
      "data": {
        "title": name,
        "description": description
      }
    });
    router.replace(router.asPath);
  }

  return (
    <div>
      {courses.data.map((course, i) => {
          return (
              <div key={i}>
                <h1>{course.attributes.title}</h1>
                <p>{course.attributes.description}</p>
              </div>
          )
      })}
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" /> 
      <br/>
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <br/>
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default Courses;