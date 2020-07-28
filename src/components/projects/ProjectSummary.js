import React from 'react';

const ProjectSummary = ({project, foo}) => {
    return(
        <div id={project.id} className="jumbotron container shadow-lg">
            <p className="h1 display-4 text-danger text-uppercase">{project.title}</p>
            <p className="font-weight-light">Author: {project.author}</p>
            <p>{project.content.slice(0, 155) + '...'}</p>
            <hr className="my-4" />
            <p className="font-weight-light">{project.date}</p>
        </div>
    )
}

export default ProjectSummary