import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  /* contextType is a special property name!
     "Button.contextType = LanguageContext" since 
     the contextType is class Button property.
     class can reference to the contextType by
     this.context
    */
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className='ui button primary'>{text}</button>;
  }
}

export default Button;
