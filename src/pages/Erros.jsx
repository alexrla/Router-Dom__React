import React from 'react';

import styled from 'styled-components';

export default function Error(props) {
    return (
        <DivError className="error">
            <h1>☹</h1>
            <p>Página não encontrada</p>
        </DivError>
    );
}

const DivError = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    justify-content: center;

    min-height: 100vh;

    text-align: center;

    width: 100%;

    h1 {
        font-size: 72px;

        padding-bottom: 10px;
    }
`;