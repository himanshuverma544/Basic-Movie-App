import React from 'react';

import { Outlet } from 'react-router-dom';

import { ToastContainer } from "react-toastify";

import Header from '../components/pages/layout/Header';
import Footer from '../components/pages/layout/Footer';


export default function Layout() {

  return (
    <div>
      <Header/>
      <hr className="h-5"/>
      <main>
        <Outlet/>
        <ToastContainer position="bottom-left"/>
      </main>
      <Footer/>
    </div>
  );
}
