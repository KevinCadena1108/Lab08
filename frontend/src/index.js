import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style.css';
import Logo from './components/Logo';
import Tabela from './components/Tabela';
import Comp from './components/Comp';
import FollowButton from './components/FollowButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo />
    <Comp />
    <FollowButton />
    <Tabela />
    <App />
    
  </React.StrictMode>
);
