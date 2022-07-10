import {
  AppWrapper,
  TasksList,
  PrimaryButton,
  Header,
  TasksForm,
} from "components";
import "./sass/_global.scss";
import { useState, useEffect } from "react";
import { ArrowIcon } from "assets";
function App() {
  const [modal, setModal] = useState(false);

  const [tasks, setTasks] = useState(
    () => JSON.parse(window.localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        <Header></Header>

        <TasksList
          tasks={tasks}
          visible={modal}
          setVisible={setModal}
          remove={removeTask}
        />
        {modal ? (
          <TasksForm
            className="tasksForm"
            create={createTask}
            setVisible={setModal}
          />
        ) : null}
        <PrimaryButton
          size="btn-sm"
          color="border-black"
          onClick={() => setModal(true)}
          icon={
            <ArrowIcon/>
          }
        >
          <h3>create task</h3>
        </PrimaryButton>
      </AppWrapper>
    </div>
  );
}

export default App;
