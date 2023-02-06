import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './modules/navbar/components/navbar';
import LogIn from './modules/auth/components/sign-in/sign-in';
import KeyList from './modules/key/components/list/key-list';
import KeyEditor from './modules/key/components/editor/key-editor';


function App() {
    const [authenticated, setAuthenticated] = useState(false)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        isAuth()
        const interval = setInterval(() => {
            setCounter(counter + 1)
        }, 30000);
        return () => clearInterval(interval)
    }, [counter])

    const isAuth = () => {
        const token = localStorage.getItem('token')
        if (!token) setAuthenticated(false)
        else {
            axios.post('', token, { headers: { 'Authorization': `Bearer ${token}` } }).then(res => {
                setAuthenticated(true)
            }).then(err => {
                if (err !== undefined) setAuthenticated(false)
            })
        }
    }

    return (
        <div className="App">
            { authenticated ? <Navbar /> : null }
            <BrowserRouter>
                <Routes>
                    <Route path='/log-in' element={<LogIn />}></Route>
                    <Route path='/key-list' element={authenticated ? <KeyList keyListData={[]} /> : <LogIn />}></Route>
                    <Route path='/key-editor' element={<KeyEditor />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
