import { useState } from "react";
import { PrimaryButton, Input, TextArea } from "components";
import { DoneIcon, CancelIcon } from "assets";
import "./tasksForm.scss";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

function TasksForm({ create, setVisible }) {
  const [task, setTask] = useState([]);
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: small_id,
    };
    create(newTask);
  };

  return (
    <form name="task-constructor" onSubmit={addNewTask}>
      <Input
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        value={task.title || ""}
        placeholder="Title"
        type="text"
      />
      <TextArea
        onChange={(e) => setTask({ ...task, body: e.target.value })}
        value={task.body || ""}
        placeholder="Description"
        type="text"
      />
      <div className="formButtons">
        <PrimaryButton
          size="btn-sm"
          color="btn-white"
          onClick={() => setVisible(false)}
          icon={<CancelIcon/>}
        >
          Cancel
        </PrimaryButton>
        <PrimaryButton
          size="btn-sm"
          color="border-white"
          onClick={addNewTask}
          icon={<DoneIcon/>}
        >
          Create
        </PrimaryButton>
      </div>
    </form>
  );
}

export default TasksForm;
