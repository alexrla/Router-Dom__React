import React from 'react';

import styled from 'styled-components';

export default function Contato(props) {
    return (
        <DivContato className="contato">
            <h1>Entre em contato com a gente, através do número:</h1>
            <p>(XX) XXXXX-XXXX</p>
        </DivContato>
    );
}

const DivContato = styled.div`
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