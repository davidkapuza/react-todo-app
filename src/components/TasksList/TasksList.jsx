import { Task, NoTasks } from "components";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../sass/_animations.scss";
import "./tasksList.scss";

function TasksList({ tasks, remove }) {
  return (
    <ul>
      <TransitionGroup>
        {tasks.map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames="task">
            <Task remove={remove} task={task} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
export default TasksList;
