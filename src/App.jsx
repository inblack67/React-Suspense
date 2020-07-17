import React, { useEffect, lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// styles
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import LazyPreloader from './components/dumb/LazyPreloader'

// Suspense
const Nav = lazy(() => import('./components/dumb/Nav'))


function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <div className="App">
      <Suspense fallback={<LazyPreloader />}>
        <Nav />
      </Suspense>
    </div>
  );
}

export default App;
