import React, { useEffect, useState } from 'react';

const Instructor = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    fetch('./people.JSON')
    .then(res => res.json())
    .then(data => setPeoples(data))
  }, [])
  return (
    <div className="row my-5">
      <h3>Our course Instructors</h3>
      {
        peoples.map(people => 
        
          <div className="col-4 my-4">
        <div className="card mx-auto" style={{width:'10rem', height:'13rem', margin:'10px'}}>
        <img src={people.img} width="200px" height="140px" className="card-img-top" alt="..."/>
        <div className="card-body">
       <h5 className="card-text">{people.name}</h5>
       </div>
      </div>
      </div>

          )
      }
    </div>
  );
};

export default Instructor;