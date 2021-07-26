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
      const scrollDiv = document.getElementById('scroll_log').parentElement;
      const yPos = scrollDiv.scrollTop;
      console.log(yPos)
    };

    //TODO: look at this
    const scrollDiv = document.getElementById('scroll_log').parentElement;

    scrollDiv.addEventListener("scroll", onScroll);

    return () => scrollDiv.removeEventListener("scroll", onScroll);;
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