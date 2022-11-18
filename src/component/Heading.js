import { Link } from "react-router-dom";

export const Heading = () => {
  return (
    <div className=" bg-dark">
      <div className="mb-10">
        <Link to="/">
          <button className=" btn btn-dark">Task List</button>
        </Link>
      </div>
      <div className=" flex-grow-1 text-rigth py-2 px-4 m-2 ">
        <Link to="/add">
          <button className="btn btn-dark position-absolute top-0 end-0">
            Add Task
          </button>
        </Link>
      </div>
    </div>
  );
}
