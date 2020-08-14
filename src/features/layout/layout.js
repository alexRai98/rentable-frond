import React, { Fragment } from 'react';
import Navbar from './navBar';
import Footer from './footer';

function Layout({children}){

    return(
        <Fragment>
            <Navbar/>
            {children}
            <Footer/>
        </Fragment>

    )
}

export default Layout;