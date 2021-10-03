import React from 'react';
import './Home.css';
import Image from '../../photo/ruman.jpg';

const Home = () => {
  return (
    <div>
     <div className="container">
  <div className="row bannar">
    <div className="col">
    <h2 className="title">Welcome to <b style={{color:'darkslateblue'}}>RuRo Coder</b> learning.</h2>
    </div>
    <div className="col">
      <img width="400px" height="400px" src={Image} alt="" />
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;