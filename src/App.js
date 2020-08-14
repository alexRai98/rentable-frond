import React from 'react';
import './App.css';
import Layout from './features/layout/layout'
import Landing from './features/landing/landing'
function App() {
  return (
    <div className="App">
      <Layout>
        <Landing/>
      </Layout>
    </div>
  );
}

export default App;
