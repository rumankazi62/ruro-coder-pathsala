import React, { useEffect, useState } from 'react';

const Service = () => {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    fetch('./fakeData.JSON')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])
  return (
    <div>
      <h3>Our all courses</h3>
      <div className="row">
      {
        courses.map(course => 
        
          <div className="col-4 my-4">
        <div className="card mx-auto" style={{width:'22rem', height:'35rem', margin:'10px'}}>
        <img src={course.img} width="200px" height="140px" className="card-img-top" alt="..."/>
        <div className="card-body">
       <h5 className="card-text">{course.name}</h5>
       <small>by</small>
        <p><b>{course.instructorName}</b></p>
        <p><i>Price: {course.price}</i></p>
        <p>{course.details}</p>
        <button className="btn btn-outline-warning mb-3" type="submit">Enroll Now</button>
       </div>
      </div>
      </div>
        
      )
      }
      </div>
    </div>
  );
};

export default Service;