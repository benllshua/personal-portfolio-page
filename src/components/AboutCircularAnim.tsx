import React from 'react';

// components

// css
import rotationClasses from '../styles/rotationAnim.module.css';
import classes from '../styles/AboutCircularAnim.module.css';

const AboutCircularAnim = () => {
  const basicPath = '/images/animations/black';

  return (
    <div className={classes.position}>
      <div className={classes.stackImages}>
        <img src={`${basicPath}/basicCircle.png`} className={`  `}></img>
        <img
          src={`${basicPath}/techyDashed.png`}
          className={`${rotationClasses.slowLeft} ${classes.smaller}  `}
        ></img>
        <img
          src={`${basicPath}/dots1.png`}
          className={`${rotationClasses.medRight} ${classes.bigger}  `}
        ></img>
      </div>
    </div>
  );
};

export default AboutCircularAnim;
