import React, {useState, useEffect} from 'react'
import LineChart from './components/LineChart';
import InputForm from './components/InputForm';
import InitialData from './initialData';

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
 
  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("user-data")) || InitialData);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "user-data", 
      JSON.stringify(data)
    );
  }, [data]);

  const projects = () => {
    return(
      data.map((data, index) => (
          <div key={index}>
            <p>{data.projectName}</p>
            <p>{data.text}</p>
            <LineChart data={data} />
          </div>
      ))
    )
  }
  return (
    <div>
      APP
      {projects()}
      <InputForm setUser={setUser} setData={setData} data={data}/>
    </div>
  )
}

export default App
