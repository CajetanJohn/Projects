import React from "react";
import MultiStepForm from "../Components/AssignmentForm"
import geometryImage from "../Assets/imgs/geometry.jpg";
import {FaQs} from '../Components/FaQs'

export default function GetStarted() {
  return (
    <>
      <div className='form-container' style={{ backgroundImage: `url(${geometryImage})`}}> 
        <MultiStepForm/>
      </div>
      <div className="bg-dark" >
        <FaQs/>
      </div>
    </>
  );
}
