import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    let { name, languagesIcons, picture, source, description } = this.props.item; 

    return (
        <div className='project'>
          <div className='icons'>
            {languagesIcons.map(icon =>
              <i className={icon} key={icon}></i>
            )}
          </div>
          <img src={picture} alt={name} style={{ width: '300px', height: '205px' }} />
          <h3>{name}</h3>
          <p>{description}</p>
      <a href={source} target="_blank" rel="noopener noreferrer"> 
          <div className="project-button">
          <i className="fa-solid fa-bullseye"></i>
          <span>projet</span>
        </div>
        </a>
        </div>
     
    );
  }
}
