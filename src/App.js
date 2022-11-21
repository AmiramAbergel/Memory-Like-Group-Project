import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandPage from './components/LandPage';
function App() {
    return (
        <div className='App'>
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate replace to='/home'></Navigate>}
                    />
                    <Route path='/home' element={<LandPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
