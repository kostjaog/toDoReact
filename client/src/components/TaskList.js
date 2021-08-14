import { React } from 'react';
import Todo from './Todo';


const taskList = (tasks, FILTER_MAP, filter, toggleTaskComplited, deleteTask, setTasks, editTask, group) => (
    tasks
    .filter(FILTER_MAP[filter])
    .map(task => {
        if(task.group === group){
            return(
                <Todo 
                    id={task.id} 
                    name={task.name} 
                    completed={task.completed}
                    key={task.id}
                    toggleTaskComplited={() => toggleTaskComplited(task.id, tasks, setTasks)}
                    deleteTask={() => deleteTask(task.id, tasks, setTasks)}
                    editTask={editTask}
                    setData={setTasks}
                    data={tasks}
                />
            )
        }
        return null
        
    })
)

export default taskList;