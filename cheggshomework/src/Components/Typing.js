import React, { useState, useRef, useEffect } from 'react';
import '../Assets/Css/Type.css';

const Type = ({text, delay, interval }) => {
  const [letter, setLetter] = useState('');
  const paragraph = useRef(null);
  let char = 0;
  let timer = null;
  

  useEffect(() => {
    timer = setTimeout(() => {Count(char);}, delay || 2000);
    return () => {clearTimeout(timer);};
  }, [text, delay]);

  function Count(char) {
    if (char < text.length) {
      setLetter((prevLetter) => prevLetter + text[char]);
      char++;
      timer = setTimeout(() => {
        Count(char);
      }, interval || 10);
    }
  }

  return <div className="paragraph" >{letter}</div>;
};

export default Type;
