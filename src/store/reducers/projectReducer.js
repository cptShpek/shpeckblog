const initState = {
    projects: [{id:1, author: 'author', title:'title', content:'content', date:'date'}]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_PROJECT': {
            let newProjcetsList = state.projects;
            newProjcetsList.push(action.project);

            return {
                ...state,
                projects: newProjcetsList
            }}

        case 'DELETE_PROJECT':{
            let oldProjectList = state.projects
            let newProjcetsList = oldProjectList.filter(item => {
                return item.id != action.id
            })
            console.log(newProjcetsList)
            return {
                ...state,
                projects: newProjcetsList
            }}

        default:
            return state
    }
}

export default projectReducer