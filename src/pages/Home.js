import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <NavBar />
                <div className='homeContent'>
                    <div className='content'>
                        <h1>AlexCoding</h1>
                        <h2>Développeur Front-end</h2>
                        <div className='pdf'>
                            <a 
                                href='./media/33e3a_cv 0124.pdf' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                aria-label="Télécharger le CV en format PDF"
                            >
                                Download CV (PDF)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
    );
};

export default Home;
