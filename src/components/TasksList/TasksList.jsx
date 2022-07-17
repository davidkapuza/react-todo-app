import { Task } from "components";
import React, {memo} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../sass/_animations.scss";
import "./tasksList.scss";

const TasksList = memo(({ tasks, remove, lastTaskRef }) => {
    return (
      <ul>
        <TransitionGroup>
          {tasks.map((task, index) => {
            if (tasks.length - 5 === index + 1) {
              return <CSSTransition  key={task.id} timeout={500} classNames="task">
                <Task ref={ lastTaskRef } remove={remove} task={task} />
              </CSSTransition>
            } else {
              return <CSSTransition key={task.id} timeout={500} classNames="task">
              <Task remove={remove} task={task} />
            </CSSTransition>
            }
          })}
        </TransitionGroup>
      </ul>
    );
})
export default TasksList;
