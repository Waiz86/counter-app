import React, {useState} from "react";


function Counter () {
    const [count, setCount,] =useState(0)
    return ( 
            
            <div className="Main">
                My Counter App
                <div className="centre">
                The count is {count}
                
                </div>
                <button className="btn1 "
                    onClick ={() =>setCount(count + 1)}>Increment
                </button>
                <button className= "btn2"
                    onClick ={() =>setCount(count - 1)}>Decrement
                </button>
                <button className="btn3"
                    onClick ={() =>setCount(0)}>Reset
                </button>
            

            </div>

     );
}
 
export default Counter;