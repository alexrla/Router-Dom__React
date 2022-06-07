import React from 'react';

import styled from 'styled-components';

export default function Sobre(props) {
    return (
        <DivSobre className="sobre">
            <h1>Componente Sobre</h1>
            <p>Saiba mais...</p>
        </DivSobre>
    );
}

const DivSobre = styled.div`
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