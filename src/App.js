import {
  AppWrapper,
  TasksList,
  PrimaryButton,
  Header,
  TasksForm,
  Fallback,
} from "components";
import "./sass/_global.scss";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ArrowIcon } from "assets";
import TasksService from "api/tasksService";
import "./sass/_global.scss";
import Loader from "components/ui/Loader/Loader";
import { useFetching } from "hooks/useFetching";

function App() {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchTasks, isTasksLoading, taskError] = useFetching(async () => {
    const response = await TasksService.getAll(limit, page);
    setTasks((prevState) => [...prevState, ...response.data]);
    setHasMore(response.data.length > 0);
  });

  const observer = useRef();
  const lastTaskRef = useCallback(
    (node) => {
      if (isTasksLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isTasksLoading, hasMore]
  );

  useEffect(() => {
    setTimeout(() => {
      fetchTasks();
    }, 1000);
  }, [page]);

  const createTask = (newTask) => {
    setTasks([ newTask, ...tasks ]);
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
              lastTaskRef={lastTaskRef}
            />
          ) : (
            <Fallback />
          )}
        </AppWrapper>
      </div>
    );
  
}

export default App;
