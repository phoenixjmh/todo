import drawTodo from "./drawTodo";

const drawAllTodos=(pm,displayPanel)=>{
    let allTodos=[];
    let allProjects = pm.getAll();
    allProjects.forEach((project)=>{
        let tempTodoArr=project.getAll();
        tempTodoArr.forEach((todo)=>{
            drawTodo(todo,displayPanel,project,pm);
        })
    })
}
export default drawAllTodos;