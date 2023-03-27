import drawTodo from "./drawTodo";
import {format,compareAsc} from 'date-fns';
const drawAllTodos=(pm,displayPanel)=>{
    let allProjects = pm.getAll();
    allProjects.forEach((project)=>{
        let tempTodoArr=project.getAll();
        tempTodoArr.forEach((todo)=>{
            
            drawTodo(todo,displayPanel,project,pm);
            
        })
        
        
    });
    
    let allTodos=displayPanel.children;
    allTodos=Array.prototype.slice.call(allTodos);
    
        allTodos.sort((a,b)=>{
            let dateA=new Date(a.childNodes[2].innerHTML);
            let dateB=new Date(b.childNodes[2].innerHTML);
            return dateA-dateB;
            
        });

     let parentContainer=displayPanel;
     parentContainer.innerHTML="";
     
     for(let i=0;i<allTodos.length;i++){
        if(allTodos[i].childNodes[2]!=='Set Date')
        parentContainer.appendChild(allTodos[i]);

        else{
            parentContainer.insertBefore(allTodos[i],parentContainer.firstChild);
        }
     }

    
    

}     

export default drawAllTodos;