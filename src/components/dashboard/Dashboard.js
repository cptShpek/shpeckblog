import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    render() {

        return(
            <div className="row justify-content-center">
                <ProjectList history={this.props.history} projects={this.props.projects}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Dashboard)