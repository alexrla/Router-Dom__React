import React from 'react';

import styled from 'styled-components';

export default function Home(props) {
    return (
        <DivHome className="home">
            <h1>Componente Home</h1>
            <p>Bem-vindo!</p>
        </DivHome>
    );
}

const DivHome = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    justify-content: center;
    
    min-height: 100vh;

    text-align: center;

    width: 100%;

    h1 {
        padding-bottom: 10px;
    }
`;