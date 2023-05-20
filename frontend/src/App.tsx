import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Providers } from '@/Providers'
import { Navbar, ProtectedRoute } from '@/components'
import { Dashboard, Home, Login, Register, Transactions } from '@/pages'
import '@/styles/global.scss'

import s from './index.module.scss'

function App() {
    return (
        <BrowserRouter>
            <Toaster containerClassName="toaster" position="top-center" reverseOrder={false} />
            <div className={s.layout}>
                <Providers>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/transactions"
                            element={
                                <ProtectedRoute>
                                    <Transactions />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Providers>
            </div>
        </BrowserRouter>
    )
}

export default App
