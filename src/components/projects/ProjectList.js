import React, {Component} from 'react';

import ProjectSummary from './ProjectSummary';

class ProjectList extends Component {
    componentDidMount(){
        this.goToProjectDetails()
    }

    goToProjectDetails = () => {
        let div = document.getElementById('projectList').querySelectorAll('div')
        for (let el of div){
            el.addEventListener('click', () => {
                this.props.history.push('/project/'+el.id)
            })
        }
    }
    
    render() {
        const {projects} = this.props
        return(
            <div id ="projectList" className="container m-5 row justify-content-center">
                {projects[0] ? (
                    projects.map(project => {
                        return <ProjectSummary foo={this.foo} key={project.id} className="border border-primary" project={project} />
                    })
                ) : 
                (
                    <span>There is no projects yet</span>
                )}
            </div>
        )
    }
}

export default ProjectList