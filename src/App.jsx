// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Automobili from './pages/automobili';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import AutomobiliDetail from './pages/AutomobiliDetail';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/automobili' element={<Automobili />} />
          <Route path='/automobili/:id' element={<AutomobiliDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;

