import { createContext } from "react";
import { useReducer } from "react";
import appReduce from "./AppReduce";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "Some task 1 description",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Some task 2 description",
    },
  ],
};

export const UserContext = createContext(initialState)

export const UserProvider = ({children}) =>{
  const [state, dispatch] = useReducer(appReduce, initialState)

    const addTask=(task)=>{
        //console.log(task)
        dispatch({type:"ADD_TASK", 
                  payload: {...task, id:v4()}})
    }

    const deleteTask=(id)=>{
        dispatch({type:"DELETE_TASK", payload:id})
    }

    const updateTask=(task)=>{
      dispatch({type:"UPDATE_TASK", payload:task})
    }


       return (
         <UserContext.Provider value={{
            ...state,
            addTask,
            deleteTask,
            updateTask
            

            }}>
           {children}
         </UserContext.Provider>
       );
      
    
}


 
 
