// Importing modules
import React from "react"; //react module

// Importing stylesheet
import "./App.css";

// Importing components
import Form from "./components/Form.js"; //Form component

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
