import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  render() {
    /* One "child", a function, that we are passing to
       the consumer, and it will automatically called by
       the consumer with what ever "value" is current
       inside a pipe */
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
