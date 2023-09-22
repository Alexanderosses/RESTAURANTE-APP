import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderComp } from './component/header/HeaderComp.jsx';
import { Home } from './routes/Home';
import { Menu } from './routes/Menu';
import { Reservation } from './routes/Reservation';
import { Contact } from './routes/Contact';
import { Aboutus } from './routes/Aboutus';
import { PlateDetails } from './routes/PlateDetails';

export const App = () => {
  const menuFrase = [
    { item: "Abierto todos los días del año"}
  ];
  return (
    <>
      <HeaderComp menuFrase={menuFrase} />
      <Routes>
        <Route path='/APP-RESTAURANTE/' element={<Home />} />
        <Route path='/APP-RESTAURANTE/Menu' element={<Menu />} />
        <Route path='/APP-RESTAURANTE/Reservation' element={<Reservation />} />
        <Route path='/APP-RESTAURANTE/Contact' element={<Contact />} />
        <Route path='/APP-RESTAURANTE/Aboutus' element={<Aboutus />} />
        <Route path='/APP-RESTAURANTE/*' element={<Navigate to='/' />} />
        <Route path='/APP-RESTAURANTE/PlateDetails/:item' element={<PlateDetails />} />        
      </Routes>
    </>
  )
}