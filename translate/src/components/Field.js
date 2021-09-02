import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  /* Forms a link between the Class on Context */
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
