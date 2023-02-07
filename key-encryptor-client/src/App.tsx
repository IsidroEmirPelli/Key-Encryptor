import './App.css';
import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import axios from 'axios';
import UserInterface from './modules/user/interface/user';
import Navbar from './modules/navbar/components/navbar';
import SignOut from './modules/auth/components/sign-in/sign-in';
import KeyList from './modules/key/components/list/key-list';
import KeyEditor from './modules/key/components/editor/key-editor';
import AuthContext from './modules/auth/context/component/auth-context';


const App: FC = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false)
    const [counter, setCounter] = useState<number>(0)
    const [user, setUser] = useState<UserInterface>({
        username: '',
        password: '',
        keyList: [],
        img: ''
    })
    const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        _isAuth()
        const interval = setInterval(() => {
            setCounter(counter + 1)
        }, 30000);
        return () => clearInterval(interval)
    }, [counter])

    const _isAuth = () => {
        const token = localStorage.getItem('token')
        if (!token) setAuthenticated(false)
        else {
            axios.post(
                'http://127.0.0.1:8000/api/token',
                token,
                { headers: { 'Authorization': `Bearer ${token}` } }
            )
                .then(res => setAuthenticated(true))
                .then(err => { if (err !== undefined) setAuthenticated(false) })
        }
    }

    return (
        <div className="App">

            <AuthContext.Provider value={{ isAuth, setIsAuth }}>

                <Navbar username={user.username} img={user.img} />

                <BrowserRouter>
                    <Routes>
                        {['/', 'key-list'].map(route => { return <KeyList keyListData={user.keyList} /> })}
                        <Route path='/log-in' element={<SignOut setUser={setUser} />}></Route>
                        <Route path='/key-editor' element={<KeyEditor />}></Route>
                    </Routes>
                </BrowserRouter>

            </AuthContext.Provider>

        </div>
    );
}

export default App;
