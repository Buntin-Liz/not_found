import React from 'react';
import info from '../../SYSTEMINFO.json';

const AboutSystem: React.FC = () => {
  return (
    <>
      <p>System infomation</p>
      <p>{`${info.NAME}  ${info.VERSION}`}</p>
    </>
  );
};

export default AboutSystem;
