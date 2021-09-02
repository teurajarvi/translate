import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  /* Note: propery name "value" is a special property
     of the Provider, also that the Provider is very 
     much different thing than Redux Provider! */
  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value='primary'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
