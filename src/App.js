import logo from './logo.svg'
import './App.css'
import Main from './navigation/Main'
import { useState } from 'react'
import { createContext } from "react";
const Context = createContext();
function App() {



  const [mapData,setMapData] = useState()
  return (
    <Context.Provider value={[mapData,setMapData]}>
      <Main />
    </Context.Provider>
  );
}

export default App
