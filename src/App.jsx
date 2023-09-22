import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import { HeaderComp } from './component/header/HeaderComp.jsx';
import { Home } from './routes/Home';
import { Menu } from './routes/Menu';
import { Reservation } from './routes/Reservation';
import { Contact } from './routes/Contact';
import { Aboutus } from './routes/Aboutus';
import { PlateDetails } from './routes/PlateDetails';

export const App = () => {
  const menuFrase = [
    { item: "Abierto todos los días del año" }
  ];
  return (
    <>
      <HeaderComp menuFrase={menuFrase} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/PlateDetails/:item' element={<PlateDetails />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};