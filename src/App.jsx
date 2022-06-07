import React from 'react';
import styled from 'styled-components';

import RoutesApp from './routes';
 
export default function App(props) {
    return (
        <DivApp className="app">
            <RoutesApp />
        </DivApp>
    );
}

const DivApp = styled.div`
    display: flex;

    min-height: 100vh;
`;