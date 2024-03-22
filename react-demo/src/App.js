import './App.css'
import FormDemo from './components/form-demo/FormDemo'


function App(){

  

  //REACT component can return only one element
  return (
    <FormDemo />
  );
}

export default App;

//module.exports = App; --> Common JS Modules approach

//React uses ECMA Script modules where as Nodejs uses Common JS Modules

//for this, remove the bootstrap import in index.js