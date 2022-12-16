import React from 'react';
import './DoorPhone.css'
import NumBtn from "../../components/NumBtn/NumBtn";
import '../../components/NumBtn/NumBtn.css';

const DoorPhone = () => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className="container d-flex justify-content-between">
      <div className="door-phone mt-4">
        <div className="result mb-3"></div>
        <div className="keyboard">
          {numbers.map(number => (
            <NumBtn num={number}/>
            )
          )}
          <button className="numBtn">	&#60;</button>
          <NumBtn num={"0"}/>
          <button className="numBtn">E</button>
        </div>
      </div>
    </div>
  );
};

export default DoorPhone;