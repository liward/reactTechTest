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

  const [count, setCount] = useState(0);

  return (
    <div>
      Question one
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click here to increment the counter.</button>
    </div>
  );
}