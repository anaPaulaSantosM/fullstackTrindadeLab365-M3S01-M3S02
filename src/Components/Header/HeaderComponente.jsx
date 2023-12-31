import * as Styled from './HeaderComponent.styled'

import React, { useContext } from 'react';
import { HeaderContext } from '../../Context/Header.context';

import Logo from '../../../public/images/Logo.png'
import { useNavigate } from 'react-router-dom';
/* import IconLogin from '../../../public/images/IconLogin.png' */

import { MdShoppingCart } from "react-icons/md";



export const HeaderComponent = () => {

    const { data } = useContext(HeaderContext)

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/')
    }

    return(
        <Styled.HeaderContainer>
            <Styled.LogoImg src={Logo}></Styled.LogoImg>

            <Styled.NavBarHeader>
            
            <Styled.SectionButtonHeader>

                <Styled.ButtonHeader>Quem somos?</Styled.ButtonHeader>

                <Styled.ButtonHeader>Contato</Styled.ButtonHeader>

                <Styled.IconCarrinho><MdShoppingCart/></Styled.IconCarrinho>

                <Styled.ButtonHeader id='buttonHeader' onClick={handleLogin}>
                    {data.buttonHeader}
                
                    <Styled.IconHeader id='iconHeader' src={data.iconHeader}/> 
                
                </Styled.ButtonHeader>

            </Styled.SectionButtonHeader>
            

            </Styled.NavBarHeader>
        </Styled.HeaderContainer>
    )
}