import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import styled from 'styled-components';
import Menu from './components/layout/Menu';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Error from './pages/Erros';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/produto/:id" element={<Produto />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}