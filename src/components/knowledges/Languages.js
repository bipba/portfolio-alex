import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

export default class Languages extends Component {

    state = {
        languages: [
            {id: 1,value:"Html", xp:1.98},
            {id: 2,value:"Css", xp:1.95},
            {id: 3,value:"Javascript", xp:1.7},
            {id: 4,value:"Phyton", xp:0.5}
        ],
        frameworks:[
            {id: 1,value:"React", xp:1.3},
            {id: 2,value:"Bootstrap", xp:1.1},
            {id: 3,value:"Sass", xp:1.8},
            {id: 4,value:"Materiel Ui", xp:0.3}
        ]
    }

  render() {

        let {languages, frameworks}= this.state

    return (
      <div className='languagesFramworks'>
      <ProgressBar
            languages={languages}
            className="languagesDisplay"
            title="languages"
            />
            <ProgressBar
            languages={frameworks}
            className="frameworksDisplay"
            title="frameworks & bibliothéque"
            />

      </div>
    )
  }
}
