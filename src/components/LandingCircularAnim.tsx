import React from 'react';

// components

// css
import rotationClasses from '../styles/rotationAnim.module.css';
import classes from '../styles/LandingCircularAnim.module.css';

const LandingCircularAnim = () => {
  const basicPath = '/images/animations/black';

  return (
    <div className={classes.position}>
      <div className={classes.stackImages}>
        <img
          src={`${basicPath}/techyDashed.png`}
          className={`${rotationClasses.slowLeft} ${classes.bigger}`}
        ></img>
        <img
          src={`${basicPath}/techyCutOut.png`}
          className={`${rotationClasses.medRight} `}
        ></img>
        <img
          src={`${basicPath}/basicCircle.png`}
          className={` ${classes.smaller} `}
        ></img>
        <img
          src={`${basicPath}/dots2.png`}
          className={` ${classes.xs} ${rotationClasses.medLeft} `}
        ></img>
      </div>
    </div>
  );
};

export default LandingCircularAnim;
