import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  /* Forms a link between the Class on Context.
     contextType is a special property name!
     "Field.contextType = LanguageContext" is the
     same as below 
     "static contextType = LanguageContext since 
     the contextType is class Button property.
     A class can reference to the contextType by
     this.context
    */
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
