import React from 'react';
import './NumBtn.css';

interface Props {
  num: string;
  onClick?: React.MouseEventHandler;
}

const NumBtn: React.FC<Props> = ({num, onClick}) => {
  return (
    <button className="numBtn" onClick={onClick}>{num}</button>
  );
};

export default NumBtn;