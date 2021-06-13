import React from 'react';
import {HeaderAppBar, HeaderLogo} from './Header.style'
import { Toolbar, Container } from '@material-ui/core'

const Header = () => {
    return (
        <HeaderAppBar position={'sticky'}>
            <Toolbar component={Container}>
                <HeaderLogo src={'/img/logos/logo.svg'} alt="e-diarista" />
            </Toolbar>
        </HeaderAppBar>
    )
}

export default Header;