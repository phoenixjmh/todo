import drawExistingTodo from "./drawExistingTodo";

const drawExistingTodos=(project,displayPanel)=>{
    displayPanel.innerHTML='';
    const todoArray=project.getAll();
    todoArray.forEach( (todo)=>{
        //Maybe assign the project to which it resides right here.

        const tempTodoDiv = drawExistingTodo(todo.title,todo.description,todo.dueDate,todo.priority,todo.id,displayPanel,project)
    })
}
export default drawExistingTodos;