import './App.css';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './modules/navbar/components/navbar';
import KeyList from './modules/key/components/list/key-list';
import KeyEditor from './modules/key/components/editor/key-editor';
import { AuthContextProvider } from './modules/auth/context/component/auth-context';
import SignIn from './modules/auth/components/signin/signin';
import PrivateRoute from './modules/private-route/components/private-route';


const App: FC = () => {

    return (
        <div className="App">
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <PrivateRoute
                            renderIfSigned={false}
                            element={<Route path='/login' element={<SignIn />} />} />
                        <PrivateRoute
                            renderIfSigned={true}
                            element={<Navbar />} />
                        <PrivateRoute
                            renderIfSigned={true}
                            element={<Route path={'/'} element={<KeyList />} />} />
                        <PrivateRoute
                            renderIfSigned={true}
                            element={<Route path={'/keylist'} element={<KeyList />} />} />
                        <PrivateRoute
                            renderIfSigned={true}
                            element={<Route path={'/keyeditor'} element={<KeyEditor />} />} />
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </div >
    );
}

export default App;
