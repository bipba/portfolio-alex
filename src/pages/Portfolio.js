import React from 'react';
import NavBar from '../components/NavBar';
import ProjectList from '../components/Portfolio/ProjectList';
import Footer from '../components/Footer';

const Portfolio = () => {
    return (
        <>
        <div className='portfolio'>
            <NavBar/>
           <ProjectList/>
        </div>
           <Footer/>
        </>
    );
};

export default Portfolio;