import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./css/navstyle.css";
import "./css/style.css";
import Layout from './pages/Layout';
import Menu from './pages/Menu'; 
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

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
