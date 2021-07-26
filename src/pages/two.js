import React, { useEffect } from 'react';

/**
 * 
 * Question Two
 * 
 * I've included a useEffect hook which monitors the current scroll position of the window and prints it out
 * 
 * Please modify the code so rather than logging the current scroll position of the window, it logs the scroll position of the div with id "scroll_log"
 * 
 */

const Two = () => {

  useEffect(() => {
    const onScroll = (e) => {
      const scrollDiv = document.getElementById('scroll_log').parentElement; // Find scroll_log's parent element and assign it to the const scrollDiv
      console.log(scrollDiv.scrollTop) // Print the scroll position of scrollDiv to the console
    };

    const scrollDiv = document.getElementById('scroll_log').parentElement; // Assign the scroll_log parent to scrollDiv. I couldn't find a way to make the declaration within onScroll global.

    scrollDiv.addEventListener("scroll", onScroll); // Add the scroll event listener to the element assigned to scrollDiv, and trigger onScroll when the scrollDiv is scrolled

    return () => scrollDiv.removeEventListener("scroll", onScroll); // Remove the aforementioned event listener on the end of the useEffect
  }, []);

  return (
    <div style={{ height: "150vh" }}>
      <div style={{ height: "50vh", width: "100px", overflow: "auto" }}>
        <div id="scroll_log" style={{ height: "200vh", backgroundColor: "green" }}>
        </div>
      </div>
    </div>
  );
}

export default Two;