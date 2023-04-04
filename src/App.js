import './App.css';
import { Routes, Route } from 'react-router-dom';
import A from './Router/A';
import C from './Router/C';
import B from './Router/B';
import D from './Router/D';
import E from './Router/E';

function App() {
  return (
    <div className="main_container">
      <Routes>
        <Route path='/' element={<A />} />
        <Route path='/B' element={<B />} />
        <Route path='/C' element={<C />} />
        <Route path='/D' element={<D />} />
        <Route path='/E' element={<E />} />
      </Routes>
    </div>
  );
}

export default App;
