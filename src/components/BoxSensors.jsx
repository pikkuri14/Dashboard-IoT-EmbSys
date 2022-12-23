
import React from "react";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import GasMeterIcon from '@mui/icons-material/GasMeter';

const BoxSensors = (props) => {

  return (
    
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <GasMeterIcon />
          
        </div>
        <div className="stat-title">Gas</div>
        <div className="stat-value">{props.val.data["Gas"]}</div>
        
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <OpacityIcon />
           
        </div>
        <div className="stat-title">Humidity</div>
        <div className="stat-value">{props.val.data["Moist"]}</div>
        
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <ThermostatIcon/>
          
        </div>
        <div className="stat-title">Temperature</div>
        <div className="stat-value">{props.val.data["Temp"]}</div>
        
      </div>
  
    </div>
  );
};

export default BoxSensors;
