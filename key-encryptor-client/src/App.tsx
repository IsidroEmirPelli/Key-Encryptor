import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeyCreator from './modules/key/components/creator/creator';
import LogIn from './modules/auth/components/log-in/log-in';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/key-creator' element={<KeyCreator />}></Route>
          <Route path='/sign-in' element={<LogIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
