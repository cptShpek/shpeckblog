import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addProject} from '../../store/actions/projectActions'

class CreateProject extends Component {
    state = {
        id: null,
        author: '',
        title: '',
        content: '',
        date: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState({
            id: Math.random(),
            date: (new Date()).toString().slice(3, 15)
        })

        setTimeout(() => this.props.addProject(this.state), 0)
        setTimeout(() => this.props.history.push('/project/' + this.state.id))
    }

    render() {
        const {author, title, content} = this.state;

        return(
            <div>
                <form className="form-group container" onSubmit={this.handleSubmit}>
                    <label className="text-secondary" htmlFor="title">Project Title</label>
                    <input onChange={this.handleChange} value={title} required id="title" className="form-control mb-4"/>
                    <label className="text-secondary" htmlFor="content">Project Content</label>
                    <textarea onChange={this.handleChange} value={content} required id="content" className="form-control mb-4" />
                    <label className="text-secondary" htmlFor="author">Project Author</label>
                    <input onChange={this.handleChange} value={author} required id="author" className="form-control mb-4"></input>
                    <button className="btn btn-primary mb-4" type="submit">Submit Project</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addProject: (project) => dispatch(addProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)