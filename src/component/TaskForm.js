import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const TasksForm = () => {
  const { addTask, tasks, updateTask } = useContext(UserContext);
  const navigate = useNavigate();
  const params = useParams();

  const [task, setTasks] = useState({
    id: "",
    title: "",
    description: "",
  });

  const HandleChange = (e) => {
    setTasks({ ...task, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate("/");
  };
  useEffect(() => {
    const taskFound = tasks.find((task) => task.id == params.id);
    console.log(taskFound);
    if (taskFound) {
      setTasks(taskFound);
    }
  }, [params.id, tasks]);

  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col-4"></div>
        <div className=" bg-dark m-5 col-4 p-1 mb-5">
          <form onSubmit={(e) => HandleSubmit(e)}>
            <h2 className=" text-danger">{params.id ? "Editing Task" : "Creating Task"}</h2>

            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={HandleChange}
            ></input>
            <br></br>
            <input
              type="text"
              name="description"
              placeholder="description"
              onChange={HandleChange}
            ></input>
            <br></br>
            <button className="btn btn-danger m-2">
              {params.id ? "Editing" : " Create"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
