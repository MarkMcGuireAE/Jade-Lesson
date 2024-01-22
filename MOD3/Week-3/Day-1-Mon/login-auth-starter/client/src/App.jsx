import axios from 'axios'

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

import './App.css'


function App() {

    const [user, setUser] = useState({})

    async function getUser(token) {
        try {
            const response = await axios.get('/api/users', {
                headers: {
                    Authorization: token
                }
            })
            setUser(response.data)
        } catch(err) {
            console.log(err)
            localStorage.removeItem("token")
        }
    }

    useEffect(() => {

        const token = localStorage.getItem("token")

        if (token) {
            // get user info
            getUser(token)
        }

    }, [])

    return ( 
        <div className="app">
            <Navbar username={user.username} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile username={user.username} email={user.email} />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
            </Routes>
        </div>
     );
}

export default App;