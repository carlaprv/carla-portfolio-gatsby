import React from 'react'
import styled from "styled-components"

import Menu from '../components/menu'

const HeaderContainer = styled.header`
    margin: 0 auto;
    padding: 0;
    z-index: 99;
`

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Menu></Menu>
            </div>
        </HeaderContainer>
        
    )
}

export default Header