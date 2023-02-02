import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeyCreator from './modules/key/components/creator/creator';
import SignIn from './modules/auth/components/sign-in/sign-in';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/key-creator' element={<KeyCreator />}></Route>
          <Route path='/sign-in' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
