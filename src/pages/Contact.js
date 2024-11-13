import React from 'react';
import NavBar from '../components/NavBar';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Footer from '../components/Footer';



const Contact = () => {
    return (
    <>
        <div className='contact'>
            <NavBar/>
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Rennes</span>
                        </li>
                        <li >
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='0619735386'>
                                <span 
                                className='clickInput' 
                                onClick={()=>{
                                        alert('Téléphone copié !');}}> 06 19 73 53 86
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li >
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text='bipbap35000@gmail.com'>
                                <span 
                                className='clickInput' 
                                onClick={()=>{
                                        alert('E-mail copié !');}}>bipbap35000@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                        <ul>
                            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                                <p>LinkedIn</p>
                                <i className='fab fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/bipba' target='_blank' rel='noopener noreferrer'>
                                <p>Github</p>
                                <i className='fab fa-github'></i>
                            </a>
                            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                                <p>Twitter</p>
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a href='https://codepen.com' target='_blank' rel='noopener noreferrer'>
                                <p>CodePen</p>
                                <i className='fab fa-codepen'></i>
                            </a>
                        </ul>
                    </div>
            </div>
        </div>
       <Footer/>
    </>
    );
};

export default Contact;