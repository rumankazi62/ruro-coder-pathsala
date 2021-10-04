import React from 'react';

const BodyDetails = (props) => {
  const {img, name, instructorName, price} = props.course;
  return (
    <div className="col-4 my-4">
      <div className="card mx-auto" style={{width:'18rem', height:'19rem', margin:'10px'}}>
  <img src={img} width="200px" height="140px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-text">{name}</h5>
    <p><b>{instructorName}</b></p>
    <p><i>{price}</i></p>
  </div>
</div>
    </div>
  );
};

export default BodyDetails;