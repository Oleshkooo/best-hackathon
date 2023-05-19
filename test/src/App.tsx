import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login, Register } from '@/pages'

import { Providers } from '@/Providers'

import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Transactions from './components/Transactions'

import Navbar from './assets/Navbar/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Toaster containerClassName="toaster" position="top-center" reverseOrder={false} />
            <div
                style={{
                    display: 'flex',
                }}
            >
                <Providers>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Providers>
            </div>
        </BrowserRouter>
    )
}

export default App
