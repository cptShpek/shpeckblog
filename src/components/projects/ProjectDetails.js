import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteProject} from '../../store/actions/projectActions';

class ProjectDetails extends Component {

    deleteProject = (id) =>{
        this.props.deleteProject(id);
    }

    render() {
        if (this.props.project === undefined) {
            return (<div></div>)
        } else {
            const {author, title, content, date, id} = this.props.project[0]
            return (
                <div className="container">
                    <p className="h1 display-4 text-danger text-uppercase">{title}</p>
                    <p className="font-weight-light">Author: {author}</p>
                    <hr className="my-4" />
                    <p className="h4">{content}</p>
                    <hr className="my-4" />
                    <p className="font-weight-light  float-left">{date}</p>
                    <button className="btn btn-danger mb-4 float-right" onClick={() => this.deleteProject(id)}>Delete Project</button>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let projects = state.projects
    let project = {...projects.filter(project => {
        return project.id == ownProps.match.params.id
    })}

    if (!project[0]) {
        alert("This project does not exist already (or yet)! Try to search at the home page!")
        ownProps.history.push('/')
        return 
    }
    return {
        project
    }
}

const mapDispatchToprops = (dispatch) => {
    return{
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(ProjectDetails)