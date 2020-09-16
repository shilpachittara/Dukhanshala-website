import React from 'react';
import ReactDOM from 'react-dom';
import NewRoutes from './NewRoutes';
import Routes from './Routes';
import "./dukhanshala/assets/css/styles.css"
// import Routes from 'Routes';


ReactDOM.render(
  <React.StrictMode>
    <NewRoutes/>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);


