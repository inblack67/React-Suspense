import React, { useEffect, lazy, Suspense } from 'react';

import { Router } from '@reach/router'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import LazyPreloader from './components/dumb/LazyPreloader'
import Preloader from './components/dumb/Preloader'

// Lazy Imports
const Nav = lazy(() => import('./components/dumb/Nav'))
const Home = lazy(() => import('./components/smart/Home'))
const Calculations = lazy(() => import('./components/smart/Calculations'))


function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <div className="App">
      <Suspense fallback={<LazyPreloader />}>
        <Nav />
      </Suspense>

      <Suspense fallback={<Preloader />}>
      <Router>
          <Home path='/' />
          <Calculations path='/calculations' />
      </Router>
      </Suspense>

    </div>
  );
}

export default App;
