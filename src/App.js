 import React from 'react';
import Boy from './pages/boy' ;
import Girl from './pages/girl';
import store from './store';
import {Provider} from "react-redux";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
    
    <div className="App">
      <div className='Boy'><Boy /></div>
      <div className='Girl'><Girl /></div>
      
    </div>

    </Provider>
  );
}

export default App;
