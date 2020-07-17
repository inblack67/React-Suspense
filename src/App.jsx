import React, { useEffect, lazy, Suspense } from 'react';
import Darkmode from 'darkmode-js';
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

  // var options = {
  //   bottom: '64px', // default: '32px'
  //   right: 'unset', // default: '32px'
  //   left: '32px', // default: 'unset'
  //   time: '0.5s', // default: '0.3s'
  //   mixColor: '#fff', // default: '#fff'
  //   backgroundColor: 'black',  // default: '#fff'
  //   buttonColorDark: 'red',  // default: '#100f2c'
  //   buttonColorLight: 'white', // default: '#fff'
  //   saveInCookies: false, // default: true,
  //   label: '🌓', // default: ''
  //   autoMatchOsTheme: true // default: true
  // }

  useEffect(() => {
    M.AutoInit();
    // new Darkmode(options).showWidget();
    new Darkmode().showWidget();
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
