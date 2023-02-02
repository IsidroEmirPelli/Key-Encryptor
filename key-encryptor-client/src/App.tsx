import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeyCreator from './modules/key-module/key-components/key-creator/key-creator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/key-creator' element={<KeyCreator />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
