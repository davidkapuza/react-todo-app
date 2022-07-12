import { PrimaryButton, Input, TextArea } from "components";
import { DoneIcon, CancelIcon } from "assets";
import { useFormik } from "formik";
import "./tasksForm.scss";
const _ = require("lodash");

function TasksForm({ create, setVisible }) {
  const unique_id = _.uniqueId("task_");

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
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

    if (!values.description) {
      errors.description = "Required";
    }
    return errors;
  }

  const addNewTask = (values) => {
    console.log(unique_id)
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
        style={getErrorStyles(errors, "description", () => ({
          visibility: "visible",
        }))}
      >
        Description is required
      </h5>

      <TextArea
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
        placeholder="Description"
        type="text"
        name="description"
        style={getErrorStyles(errors, "description", () => ({
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
}

export default TasksForm;
