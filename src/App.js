
import './App.css';
import BoxSensors from './components/BoxSensors';
import Cards from './components/Cards';
import React,{useState, useEffect} from 'react';

import Fikri from "./assets/Fikri.jpg"
import Oktarisa from "./assets/Oktarisa.jpg"
import Andreas from "./assets/Andreas.jpg"

import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import GasMeterIcon from '@mui/icons-material/GasMeter';

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./lib/firebase-init";

function App() {

  const user = {
    "user1" : {
      "nama" : "Fikri Fauzi",
      "photo" : {Fikri},
      "role" : "Web Development"
    },
    "user2" : {
      "nama" : "Oktarisa N H",
      "photo" : {Oktarisa},
      "role" : "Hardware Designer"
    },
    "user3" : {
      "nama" : "Andreas",
      "photo" : null,
      "role" : "Embedded Programmer"
    }
  }
  const [sensor, setSensor] = useState({
    "data":{
      "Temp" : null,
      "Moist" :null,
      "Gas" : null
    }
  });

  useEffect(() => {
    getsensor()
  }, [])

  useEffect(() => {
    console.log(sensor)
  },[sensor])

  const getsensor = () => {
    const sensorCollectionRef = collection(db, "EmbSys");
    onSnapshot(sensorCollectionRef, (snapshot) => {
        snapshot.docs.forEach((doc) =>{
            setSensor({data: doc.data(), id: doc.id});
        })
    })
  };
  


  return (
    <div className="App">
      <h1 className='flex justify-center items-center text-3xl'>Project Sistem Tertanam</h1>
      <div>

        <div className='flex justify-center items-center h-screen py-0 '>
          
          <div className='flex'>
            <Cards data={user.user2} photo={Oktarisa}/>
            <Cards data={user.user1} photo={Fikri}/>
            <Cards data={user.user3} photo={Andreas}/>

          </div>
        </div>
        
      </div>
      <div className='flex justify-center items-center h-screen'>
        <BoxSensors logo={<OpacityIcon/>} name="Hum" val={sensor.data["Moist"]}/>
        <BoxSensors logo={<ThermostatIcon/>} name="Temp" val={sensor.data["Temp"]}/>
        <BoxSensors logo={<GasMeterIcon/>} name="gas" val={sensor.data["Gas"]}/>
      </div>
      
 

    </div>
  );
}
export default App;
