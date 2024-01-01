import React, { Fragment, ReactElement } from 'react'
import Navbar from './NavBar'
import { Container } from '@mui/material'
import Footer from './Footer'

const Layout = ({ children }: any) => {
    return (
        <div style={{background:"#ddddddcf"}}>
            <Navbar />
            <Container style={{minHeight:"100vh"}}>
                {children}
            </Container>
            <Footer/>
        </div>
    )
}

export default Layout