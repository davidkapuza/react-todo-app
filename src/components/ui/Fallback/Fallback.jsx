import { noTasksImg } from "assets";
import "./fallback.scss";
import "../../../sass/_animations.scss";

function NoTasks() {
  return (
    <div>
      <img src={noTasksImg} className="no-tasks-img" alt="no-tasks"></img>
      <h1>
        There is no
        <br /> tasks.
      </h1>
    </div>
  );
}

export default NoTasks;
