import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { HashRouter, Routes, Route } from 'react-router-dom';
import { HOME, PREFERENCES, PAGE404 } from '../routes.js';

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Preferences from './pages/Preferences.jsx';


function App() {

  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={HOME.pathname} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={PREFERENCES.pathname} element={<Preferences/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
