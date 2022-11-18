export default function appReduce (state, action){
    console.log(state, action)
     
    switch(action.type){
        case 'ADD_TASK':
         return {
        tasks: [...state.tasks, action.payload]
         }
    case 'DELETE_TASK':
        
        return{
            tasks: state.tasks.filter(taks=> taks.id !== action.payload)
        }
     case 'UPDATE_TASK':
        const updatetask = action.payload
         const updateTasks = state.tasks.map((task) => {
            if(task.id == updatetask.id){
                task.title = updatetask.title;
                task.description = updatetask.description

            }
          return task
       })
        
    return{
            tasks:updateTasks
         }
        default:
            break
    }

   
}