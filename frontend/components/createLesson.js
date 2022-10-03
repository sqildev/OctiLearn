import axios from "axios";
import React from "react";

const createLesson = ({refreshData}) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const addLesson = () => {
    axios.post("https://pwufnt-1337.preview.csb.app/api/courses", {
      data: {
        title: name,
        description: description,
      },
    });
    refreshData();
    setName("");
    setDescription("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <br />
      <button onClick={addLesson}>Add Lesson</button>
    </div>
  );
};

export default createLesson;