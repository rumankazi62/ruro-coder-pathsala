import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BodyDetails from '../BodyDetails/BodyDetails';

const Body = () => {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    fetch('./fakeData.JSON')
    .then(res => res.json())
    .then(data => setCourses(data.slice(0,5)))
  }, [])
  return (
    <div className="row">
      {
        courses.map(course => <BodyDetails course={course}></BodyDetails>)
      }
      <Link to="/service">
        <button className="btn btn-outline-info mb-3" type="submit">Details</button>
      </Link>
    </div>
  );
};

export default Body;