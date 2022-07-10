import { SecondaryButton, IconButton } from "components";
import { DoneIcon, RemoveIcon } from "assets";
import "./task.scss";
import "../../sass/_global.scss";

function Task({ task, remove }) {
  return (
    <div className="task">
      <li>
        <span className="btns-wrapper">
          <SecondaryButton
            size="btn-sm"
            color="btn-black"
            onClick={() => remove(task)}
            icon={<DoneIcon />}
          >
            Complite
          </SecondaryButton>
          <IconButton
            size="btn-sm"
            color="btn-white"
            onClick={() => remove(task)}
            icon={<RemoveIcon />}
          />
        </span>
        <h4>{task.title}</h4>
        <p>{task.body}</p>
      </li>
    </div>
  );
}

export default Task;
