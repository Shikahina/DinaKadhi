import React, { useState,useEffect } from 'react'
import ReactJson from 'react-json-view';
function Planets(props) {
  const url = "http://planet-backend-application.herokuapp.com/getDiff";
  const [state, setstate] = useState();
  useEffect(() => {
    asyncawaitfunc()
    return () => {
      
    }
  },[props])
  var date = props.date;
  //var date=new Date();
  
  const engToTamil=(planet)=>{
    var map=
    { 
      "Sun":"சூரியன்",
      "Moon":"சந்திரன்",
      "Mars":"செவ்வாய்",
      "Asc":"லக்னம்",
      "Venu":"சுக்கிரன்",
      "Jupt":"குரு",
      "Ketu":"கேது",
      "Rahu":"ராகு",
      "Satn":"சனி",
      "Merc":"புதன்"
    }
    
    return map[planet]
  }
  const buildPlanets=(parsed)=>{
    var build={}
    var keys=Object.keys(parsed);
    //console.log(parsed)
    keys.forEach(key=>{
      const translated=engToTamil(key);
      console.log(key+":"+translated)
      if(translated!== undefined)
      build[translated]=parsed[key]
    });
    return build
  }
  const jsonParser=(unparsed)=>{
    var parsed={}
    unparsed.diff.forEach(element => {
      parsed[element.name]={"retrograde":element.reverse,"deg":element.deg,"min":element.min,"sec":element.sec}
      
    });
    delete parsed["undefined"]
    return parsed;
  }

  const asyncawaitfunc = async () => {
    var reqBody = {
      "day": date.getDate(),
      "month": date.getMonth()+1,
      "year": date.getFullYear(),
      "hrs": date.getHours(),
      "min": date.getMinutes(),
      "sec": date.getSeconds()
    }
    console.log(reqBody);
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    });
    const content = await rawResponse.json();
    const parsed=jsonParser(content)
    const build=buildPlanets(parsed)
    //const list=buildList(build)
    var listExp=[];
    var keys=Object.keys(build);
    //console.log(parsed)
    keys.forEach(key=>{
      
      var value=build[key]
      value["name"]=key
      listExp.push(value)
      
    });
    
    setstate({"data":listExp});
    console.log(listExp)
  };
  

  return <>
    
    
    {state === undefined ? <p>Loading</p> : (
      <><div className="container-fluid">
    <div className="table-responsive">   

    

  <table className="table table-sm">
    <thead>
      <tr >
        <th >கிரகம்</th>
        <th >தினகதி</th>
        <th >வக்கிர நிலை</th>
      </tr>
    </thead>
    {state.data.map((data, key) => {
          return (
            <tr>
            <td>{data.name}</td>
            <td>{data.deg}:{data.min}:{data.sec}</td>
            <td>{data.retrograde?<div style={{backgroundColor:"black",color:"white"}}>வ</div>:<div>நே</div>}</td>
            </tr>
          );
        })}


    
  </table>
  </div>  
    </div>
      
      </>
    )}
  </>
}
export default Planets;