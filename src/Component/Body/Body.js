import React, { useEffect, useState } from 'react';
import BodyDetails from '../BodyDetails/BodyDetails';

const Body = () => {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    fetch('./fakeData.JSON')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])
  return (
    <div className="row">
      {
        courses.map(course => <BodyDetails course={course}></BodyDetails>)
      }
    </div>
  );
};

export default Body;