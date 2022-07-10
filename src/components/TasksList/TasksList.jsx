import { Task, NoTasks } from "components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../sass/_animations.scss";
import "./tasksList.scss";

function TasksList({ visible, tasks, remove }) {
  return (
    <>
      {visible || tasks.length ? (
        <ul>
          <TransitionGroup>
            {tasks.map((task) => (
              <CSSTransition key={task.id} timeout={500} classNames="task">
                <Task remove={remove} task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      ) : (
        <NoTasks />
      )}
    </>
  );
}

export default TasksList;
