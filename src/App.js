import {
  AppWrapper,
  TasksList,
  PrimaryButton,
  Header,
  TasksForm,
  NoTasks,
} from "components";
import "./sass/_global.scss";
import { useState, useEffect } from "react";
import { ArrowIcon } from "assets";
import TasksService from "api/tasksService";
import "./sass/_global.scss";
import Loader from "components/ui/Loader/Loader";
import { useFetching } from "hooks/useFetching";

function App() {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [fetchTasks, isTasksLoading, taskError] = useFetching(async () => {
    const tasks = await TasksService.getAll();
    setTasks(tasks);
  });

  //====== Writing to localStorage ========//

  /*   const [tasks, setTasks] = useState(
    () => JSON.parse(window.localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); */

  useEffect(() => {
    setTimeout(() => {
      fetchTasks();
    }, 1000);
  }, []);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModal(false);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((p) => p.id !== task.id));
  };

  return (
    <div className="App">
      <AppWrapper>
        <Header>
          <PrimaryButton
            size="btn-small"
            color="border-black"
            onClick={() => setModal(true)}
            icon={<ArrowIcon />}
          >
            <h3>create task</h3>
          </PrimaryButton>
        </Header>
        {modal ? <TasksForm create={createTask} setVisible={setModal} /> : null}
        {taskError && <h1>Error: {taskError}</h1>}
        {isTasksLoading ? (
          <Loader />
        ) : tasks.length || modal || taskError ? (
          <TasksList
            tasks={tasks}
            remove={removeTask}
          />
        ) : (
          <NoTasks />
        )}
      </AppWrapper>
    </div>
  );
}

export default App;
