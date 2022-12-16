import React, {useEffect, useState} from 'react';
import './DoorPhone.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {add, removeSymbol} from "./doorPhoneSlice";

const DoorPhone = () => {
  const dispatch = useDispatch();
  const correctPassword = '1247';
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const doorPhoneValue = useSelector((state: RootState) => state.doorPhone.value);
  const [resultText, setResultText] = useState('');
  const [resultClassName, setResultClassName] = useState('result ');
  const [disabled, setDisabled] = useState(false);
  let stars = '';
  for (let i = 0; i < doorPhoneValue.length; i++) {
    stars += '*';
  }



  useEffect(() => {
    setResultText(stars);
  }, [stars]);

  useEffect(() => {
    if (doorPhoneValue.length >= 4) {
      setDisabled(true);
    } else {
      setDisabled(false);
      setResultClassName('result')
    }
  }, [doorPhoneValue]);

  const onEnter = () => {
    if (doorPhoneValue === correctPassword) {
      setResultClassName('result result-success');
      setResultText('Access Granted');
    } else {
      setResultClassName('result result-danger');
      setResultText('Access Denied');
    }

  }


  return (
    <div className="container d-flex justify-content-between">
      <div className="door-phone mt-4">
        <div className={resultClassName + ' mb-3'}>{resultText}</div>
        <div>
          <div>
          </div>
          <div className="keyboard">
            {numbers.map(number => (
                <button disabled={disabled} className="numBtn" key={number} onClick={() => dispatch(add(number))}>{number}</button>
              )
            )}

            <button className="numBtn" onClick={() => dispatch(removeSymbol())}>&#60;</button>
            <button className="numBtn" onClick={() => dispatch(add('0'))} disabled={disabled}>0</button>
            <button className="numBtn" onClick={() => onEnter()}>E</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorPhone;