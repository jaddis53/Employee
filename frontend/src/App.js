//import logo from './logo.svg';
import './App.css';
import{AllEmployees} from './components/AllEmployees';
import {EmployeeAdd} from './components/EmployeeAdd';


function App() {
  
  return (
    
    <div className="App">
      <EmployeeAdd/>
      <AllEmployees/>
    </div>
  );
}

export default App;
