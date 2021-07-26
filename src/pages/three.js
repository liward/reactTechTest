import React, { useEffect } from 'react';
import {ScrollRotate} from "react-scroll-rotate";

/**
 * 
 * Question Three
 * 
 * We have the same useEffect as the last question expect now I'd like you to rotate the square (div with id square) based on the window scroll. 
 * 
 * As you scroll down the window, the div should rotate
 * 
 */

const Three = () => {

  useEffect(() => {
    const onScroll = (e) => {
      const yPos = window.pageYOffset;
      console.log(yPos)
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // For this task, I imported the react-scroll-rotate library, which provides an easy method to rotate elements based on the position of a scroll position.
  // I figured that the existing library code would be more more robust than a custom implementation written by me.
  // Here is the link to the library I used: https://bestofreactjs.com/repo/giladk-react-scroll-rotate-react-ui-animation

  return (
    <div style={{ height: "200vh", overflow: "hidden" }}>
      <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "fixed"}}>
        <ScrollRotate><div id="square" style={{ height: "5rem", width: "5rem", backgroundColor: "green" }} /></ScrollRotate>
      </div>
    </div>
  );
}

export default Three;