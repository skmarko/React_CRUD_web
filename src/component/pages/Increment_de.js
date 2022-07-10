import React from "react";
import "./Increment.css";

import {useSelector ,useDispatch} from 'react-redux'
import store from "../../store";
import { incNumber,decNumber } from "../../Action/index.js";

const Increment = () => {

    const myState = useSelector((state)=>state.changeTheNumber)
    const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Incremnet/Decement Counter</h1>
        <h4>Using React and Redux</h4>
        <a className="minus" title="Derement" onClick={()=>dispatch(decNumber())}>
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity_input"
          value={myState}
        />
        <a className="plus" title="Increment"  onClick={()=>dispatch(incNumber())}>
          <span>+</span>
        </a>
      </div>
    </>
  );
};

export default Increment;
