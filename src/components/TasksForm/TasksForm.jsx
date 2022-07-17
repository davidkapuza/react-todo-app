import { PrimaryButton, Input, TextArea } from "components";
import { DoneIcon, CancelIcon } from "assets";
import { useFormik } from "formik";
import { memo } from 'react';
import "./tasksForm.scss";
const _ = require("lodash");

const TasksForm = memo(({ create, setVisible }) => {
  const unique_id = _.uniqueId("task_");

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        title: "",
        body: "",
      },
      validate,
      onSubmit: (values) => {
        addNewTask(values);
      },
    });

  function validate(values) {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.body) {
      errors.body = "Required";
    }
    return errors;
  }

  const addNewTask = (values) => {
    const newTask = {
      ...values,
      id: unique_id,
    };
    create(newTask);
  };

  function getErrorStyles(errors, fieldName, callback) {
    if (touched[fieldName] && errors[fieldName]) {
      return callback();
    }
  }
  return (
    <form name="task-constructor" onSubmit={handleSubmit}>
      <h5
        className="error-message"
        style={getErrorStyles(errors, "title", () => ({
          visibility: "visible",
        }))}
      >
        Title is required
      </h5>

      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
        placeholder="Title"
        type="text"
        name="title"
        style={getErrorStyles(errors, "title", () => ({
          border: "2px solid #df4837",
        }))}
      />

      <h5
        className="error-message"
        style={getErrorStyles(errors, "body", () => ({
          visibility: "visible",
        }))}
      >
        Description is required
      </h5>

      <TextArea
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.body}
        placeholder="Description"
        type="text"
        name="body"
        style={getErrorStyles(errors, "body", () => ({
          border: "2px solid #df4837",
        }))}
      />

      <div className="formButtons">
        <PrimaryButton
          type="button"
          size="btn-small"
          color="btn-white"
          onClick={() => setVisible(false)}
          icon={<CancelIcon />}
        >
          Cancel
        </PrimaryButton>
        <PrimaryButton
          type="submit"
          size="btn-small"
          color="border-white"
          icon={<DoneIcon />}
        >
          Create
        </PrimaryButton>
      </div>
    </form>
  );
})

export default TasksForm;
