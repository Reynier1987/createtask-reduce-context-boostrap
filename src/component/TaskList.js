import { UserContext } from "../context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const context = useContext(UserContext);
  const { deleteTask } = useContext(UserContext);
  console.log(context);

  return (
    <div className=" bg-danger">
      <h2 className=" bg-light">Tasks List...</h2>
      <div className=" container">
        <div className=" row-4">
          {context.tasks.map((task) => (
           
              <div className="col-12 m-2 p-1 mb-2 bg-dark" key={task.id}>
                <p className=" text-bg-light">
                  Title:{task.title}
                  <br></br>Id:{task.id}
                </p>
                <button
                  className="btn btn-warning"
                  onClick={(e) => deleteTask(task.id)}
                >
                  Delete
                </button>
                {/*formas diferentes de concatenar*/}
                <Link to={`/edit/${task.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <Link to={"/edit/" + task.id} className="btn btn-warning">
                  Edit
                </Link>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};
/*   */
