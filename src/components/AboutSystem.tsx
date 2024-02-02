import React from 'react';
import info from '../../SYSTEM_INFO.json';

const AboutSystem: React.FC = () => {
  return (
    <>
      <p>System information</p>
      <p>{`${info.NAME}  ${info.VERSION}`}</p>
    </>
  );
};

export default AboutSystem;
