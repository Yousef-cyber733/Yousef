import React from 'react'
import MainNavbar from '../components/MainNavbar'
import Mainfooter from '../components/Mainfooter'

export default function MainLayout({ children }) {
    return (
        <>
            <MainNavbar />
            {children}
            <Mainfooter />
        </>
    )
}
