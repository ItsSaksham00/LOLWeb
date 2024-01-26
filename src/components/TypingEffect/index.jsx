import { useEffect, useState } from "react";

const TypingEffect = ({ texts, speed, loopDelay }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
  
    useEffect(() => {
      const type = () => {
        if (direction === 1) {
          setDisplayText((prevText) =>
            texts[currentTextIndex].substring(0, index)
          );
          setIndex((prevIndex) => prevIndex + 1);
          if (index >= texts[currentTextIndex].length) {
            setDirection(-1);
          }
        } else {
          setDisplayText((prevText) =>
            texts[currentTextIndex].substring(0, index)
          );
          setIndex((prevIndex) => prevIndex - 1);
          if (index <= 0) {
            setDirection(1);
            setIndex(0);
  
            
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
        }
      };
  
      const intervalId = setInterval(() => {
        type();
      }, speed);
  
    
      return () => clearInterval(intervalId);
    }, [texts, speed, currentTextIndex, index, direction]);
  
    useEffect(() => {
      const resetAndStartNextLoop = () => {
        setDisplayText("");
        setTimeout(() => {
          setDirection(1);
        }, loopDelay);
      };
  
  
      resetAndStartNextLoop();
    }, [currentTextIndex, loopDelay]);
  
    return <div>{displayText}</div>;
  };

  export default TypingEffect;