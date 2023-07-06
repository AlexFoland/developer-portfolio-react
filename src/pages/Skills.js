import React from 'react'
import SimpleList from '../components/listofskills/ListOfSkills';

function Skills() {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <div className="project-details">
                        <h1 className="title-1">Skills</h1>
                        <SimpleList />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Skills;