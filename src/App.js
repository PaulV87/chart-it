import React, {useState, useEffect} from 'react';
import {  BrowserRouter as Router,
          Switch,
          Route,
          Link } from 'react-router-dom';
import NewChart from './components/NewChart';
import Chart from './components/Chart';
import ProjectList from './components/ProjectList';
import InitialData from './initialData';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

function App() {
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

/*  const projects = () => {
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
*/
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={(routeProps) => (<ProjectList routeProps={routeProps} data={data} />) }/>
        <Route exact path="/charts/new" render={(routeProps) => (<NewChart data={data} handleDataChange={setData}/>)} />
        <Route exact path="/charts/:id" render={(routeProps) => (<Chart chartId={routeProps.match.params.id} data={data} />)} />
        {/*  default route for invalid urls. Redirects to home page */ }
        <Route render={(routeProps) => (<ProjectList routeProps={routeProps} data={data} />) }/>
      </Switch>
    </Router>
    
  )
}

export default App
