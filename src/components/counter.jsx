import React, { useState } from "react";
import './counter.css'

const Counter = () => {
  //hooks (use) useState
  //hooks are set ofinbuild react functions used to interact with Vitual DOM.

  //useState is a hook in react which is used to inform virtual DOM of the changes that needs to be rendered it return 2 things in an array.
  //variable and a function to update that variable.

  //State:
  //State is a info that is changing on DOM.

  const [count, setCount] = useState(0);

  // const incrementCount =() =>{
  //     console.log('Pre',count);
  //     setCount(count+1);
  //     console.log('Post',count);
  // };

  return (
    <div className="main">
      <h1>Counter App</h1>
      <h2 className={`${count%2===1 ? "Odd" : "Even"}`}>{count}</h2>
      <button className="btn1" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="btn2"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>

      <button className="btn3" onClick={() => setCount(count*2)}>Double</button>
    </div>
  );
};

export default Counter;
