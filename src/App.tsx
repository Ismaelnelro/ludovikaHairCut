import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import ExperiencesPage from './pages/ExperiencesPage';
import MainLayout from './pages/layout/MainLayout';
import React from 'react';
const EsteticaPage = React.lazy(() => import('./pages/EsteticaPage'));
const ContantPage = React.lazy(() => import('./pages/ContantPage'));
const PeluqueriaPage = React.lazy(() => import('./pages/PeluqueriaPage'));
const SalonPage = React.lazy(() => import('./pages/SalonPage'));


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/peluqueria' element={<PeluqueriaPage />} />
        <Route path='/experiencia' element={<ExperiencesPage />} />
        <Route path='/estetica' element={<EsteticaPage />} />
        <Route path='/salon' element={<SalonPage />} />
      </Route>
      <Route path='/contacto' element={<ContantPage />} />
    </Routes >
  );
}

export default App;