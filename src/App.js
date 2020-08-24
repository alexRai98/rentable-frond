import React from 'react';
import './App.css';
import Layout from './features/layout/layout'
import Landing from './features/landing/landing'
import PropertiesList from './features/properties/propertiesList';

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Landing/> */}
        <PropertiesList />
      </Layout>
    </div>
  );
}

export default App;
