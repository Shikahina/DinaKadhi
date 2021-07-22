import './App.css';
import React,{useState} from 'react'
import 'react-timepicker/timepicker.css';
import MaterialUIPickers from './Components/TimePicker';
import Planets from './Components/Planets';
function App() {
  const [date, setdate] = useState(new Date())
  // const [time,setTime] =useState()
  
  const ChangeDate= (date) =>{
    //console.log(date);
    setdate(date)
  }
  
  return (
    
    <div className="App">
      தினகதி
      <form>
      {/* <Timepicker onChange={onChange} /> */}
       <MaterialUIPickers onChange={ChangeDate}/>
        
      </form>

      <Planets date={date}/>
    </div>
  );
}

export default App;
