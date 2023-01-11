
import React from "react";


const BoxSensors = (props) => {

  return (
    
    <div className="stats shadow block mx-2 ">
      <div className="stat">
        <div className="stat-figure text-secondary">
          {props.logo}
          
        </div>
        <div className="stat-title">{props.name}</div>
        <div className="stat-value">{props.val}</div>
        
      </div>
  
    </div>
  );
};

export default BoxSensors;
