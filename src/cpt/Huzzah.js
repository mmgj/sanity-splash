import React from 'react';
import Confetti from 'react-confetti';

const Huzzah = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return <Confetti width={width} height={125000 || height} />;
};
export default Huzzah;
