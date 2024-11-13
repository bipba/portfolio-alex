import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
         <h3>Intérêts</h3>
         <ul>
            <li className="hobby"><i className="fas fa-swimmer"></i><span>Natation</span></li>
            <li className="hobby"><i className="fas fa-parachute-box"></i><span>Parapente</span></li>
            <li className="hobby"><i className="fas fa-binoculars"></i><span>Astronomie</span></li>
            <li className="hobby"><i className="fas fa-chess"></i><span>Échecs</span></li>
            <li className="hobby"><i className="fas fa-anchor"></i><span>Voile</span></li>
            <li className='hobby'><i className='fas fa-music'></i><span>Musique</span></li>
         </ul>
        </div>
    );
};

export default Hobbies;