import React from 'react';
import { Link } from 'react-router-dom';

function MyComponent() {
  return (
    <div className="get-started ">
      <p>Starting @ $15</p>
      <Link to="/GetStarted">GO</Link>
    </div>
  );
}

export default MyComponent;

