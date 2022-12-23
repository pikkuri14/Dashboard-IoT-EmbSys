
import './App.css';
import BoxSensors from './components/BoxSensors';
import React,{useState, useEffect} from 'react';

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./lib/firebase-init";
import Sidebar from './components/Sidebar';

function App() {

  
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
      <div className='flex justify-center items-center h-screen'>
        <BoxSensors val={sensor}/>
      </div>


    </div>
  );
}
export default App;
