import React from 'react';

const BodyDetails = (props) => {
  const {img, name} = props.course;
  return (
    <div className="col-6">
      <div className="card" style={{width:'18rem'}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{name}</p>
  </div>
</div>
    </div>
  );
};

export default BodyDetails;