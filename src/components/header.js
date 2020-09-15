import React from 'react'
import headerStyles from './header.module.scss'
import Menu from '../components/menu'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div>
                <Menu></Menu>
            </div>
        </header>
        
    )
}

export default Header