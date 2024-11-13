import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
            <>
        <div className='notFound'>
           <div className='notFoundContent'>
           <h3>Cette page ne vous aidera pas !</h3>
            <NavLink to ="/">
                <i className='fas fa-home'></i>
                <span>Acceuill</span>
            </NavLink>
            </div>
        </div>
            <Footer/> 
        </>
       
    );
};

export default NotFound;