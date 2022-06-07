import React from 'react';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';

export default function Produto(props) {
    const { id } = useParams();
    return (
        <DivProduto className="produto">
            <h1>Produto {id}</h1>
        </DivProduto>
    );
}

const DivProduto = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    justify-content: center;

    min-height: 100vh;

    text-align: center;

    width: 100%;

    h1 {
        color: #5E70E4;
        
        font-size: 24px;

        font-weight: bold;

        padding-bottom: 10px;
    }
`;