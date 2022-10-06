import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Provider} from 'react-redux';

export default function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}