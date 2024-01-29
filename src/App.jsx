import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { actionDecrement,actionIncrement } from './action/index';

const App = () => {
  const myState=useSelector((state)=>state.counter)
  const dispatch=useDispatch();
  return (
    <div>
      <h1>increment-decrement</h1>
      <button className='decrement' onClick={()=>dispatch(actionDecrement(5))}>-</button>
      <input type="text" name="input" id="data"  value={myState}/>
      <button className='increment' onClick={()=>dispatch(actionIncrement(10))}>+</button>
    </div>
  )
}

export default App;