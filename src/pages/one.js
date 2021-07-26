import React, { Component, useState } from 'react';

/**
 * 
 * Question One
 * 
 * Let's start out with a simple counter
 * 
 * Please create a h1 header with the text "Counter: " and the number of times a button has been pressed
 * 
 * Add the button bellow the h1 header. 
 * 
 * If the button has been pressed 4 times, the header should have the following text "Counter: 4"
 * 
 */

export default function One() {

  // Declare a constant with value attribute named count and an update method named setCount
  const [count, setCount] = useState(0);


  return (
    <div>
      Question one
      <h1>Counter: {count}</h1>
      {/* Create a button and set its onClick attribute to setCount(count + 1). This increments the count value by 1 when the button is pressed. */}
      <button onClick={() => setCount(count + 1)}>Click here to increment the counter.</button>
    </div>
  );
}