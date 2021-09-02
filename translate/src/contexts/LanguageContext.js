import React from "react";

/* We can use any type of JS object when passing
   the createContext default value as string 
   "english". It can be also f.e. { color: "red" }
   of array [1,2,3] 
  */
const Context = React.createContext("english");

/* Named export, not a default */
export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  /* React must have capital letter in name of component
     it renders f.e. "Context" in this case. */
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
