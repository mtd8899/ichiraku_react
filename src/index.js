import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./css/navstyle.css";
import "./css/style.css";
import "./css/menu.css";
import Layout from './components/Layout';
import Menu from './components/Menu'; 
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import NoPage from './components/NoPage';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export default function App() {
  return(
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ <Home /> } />
            <Route path="home" element={ <Home /> } />
            <Route path="menu" element={ <Menu /> } />
            <Route path="contact" element={ <Contact /> } />
            <Route path="about" element={ <About /> } />
            <Route path="*" element={ <NoPage /> } />
            <Route path="dashboard" element={ <Dashboard /> } />
            <Route path="login" element={ <Login /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
