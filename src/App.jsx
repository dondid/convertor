import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import LengthConverter from './components/Converter/LengthConverter';
import MassConverter from './components/Converter/MassConverter';
import VolumeConverter from './components/Converter/VolumeConverter';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h1>Convertor Universal</h1>
                    <nav className="nav-container">
                        <NavLink
                            to="/length"
                            className={({ isActive }) =>
                                isActive ? "nav-button active" : "nav-button"
                            }
                        >
                            Lungime
                        </NavLink>
                        <NavLink
                            to="/mass"
                            className={({ isActive }) =>
                                isActive ? "nav-button active" : "nav-button"
                            }
                        >
                            Masă
                        </NavLink>
                        <NavLink
                            to="/volume"
                            className={({ isActive }) =>
                                isActive ? "nav-button active" : "nav-button"
                            }
                        >
                            Volum
                        </NavLink>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<LengthConverter />} />
                        <Route path="/length" element={<LengthConverter />} />
                        <Route path="/mass" element={<MassConverter />} />
                        <Route path="/volume" element={<VolumeConverter />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;