import React from 'react';
import Image from '../../photo/ruman.jpg';
const About = () => {
  return (
    <div>
      <div className="container">
  <div className="row bannar">
    <div className="col">
    <p className="fs-3">Why use our website? This question may come to your mind. Through this website, you will find solutions to various issues of programming. You can find some of the best programmer courses in the country on our website. So start your new journey today.</p>
    </div>
    <div className="col">
      <img width="400px" height="400px" src={Image} alt="" />
    </div>
  </div>
</div>
    </div>
  );
};

export default About;