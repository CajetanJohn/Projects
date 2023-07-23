import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counters = () => {

const [counteron, setCounteron] = useState(false);

return (
  <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(true)}>
    <ul className="bottom-flow-in counters d-flex flex-column">
      <li>
        <h5>{ counteron && <CountUp start={0} end={56} duration={2} delay={.6}/>}+ Months</h5>
        <p>...of experience in academic writting</p>
      </li>
      <li>
        <h5>{ counteron && <CountUp start={0} end={2540} duration={2.2} delay={.9} />} + </h5>
        <p>Total papers submitted</p>
      </li>
      <li>
        <h5>{ counteron && <CountUp start={0} end={92} duration={1.6} delay={1.2}/>} %</h5>
        <p> Of our students say they got excellent grades</p>
      </li>
    </ul>
  </ScrollTrigger>
  )
};

export default Counters;
