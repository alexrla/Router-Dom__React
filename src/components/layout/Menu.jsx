import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <AsideMenu className="menu">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>

                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul> 
                </nav>
            </AsideMenu>
            <Overlay></Overlay>
        </>
    );
}

const AsideMenu = styled.aside`
    background-color: #5E70E4;

    display: flex;

    min-height: 100vh;

    position: fixed;

    top: 0;

    width: 250px;

    nav {
        flex: 1;
    }

    li  {
        display: flex;

        margin: 10px;
    }

    li a {
        color: #FFFFFF;

        cursor: pointer;

        flex: 1;

        font-size: 24px;

        font-weight: bold;

        padding: 10px;
        
        text-decoration: none;
    }

    li a:hover {
        background-color: #00000030;
    }
`;

const Overlay = styled.div`
    background-color: #5E70E4;

    width: 250px;
`;