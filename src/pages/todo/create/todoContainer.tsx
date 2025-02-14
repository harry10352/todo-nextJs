import React, { useEffect } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { createTodoActionCreator } from "@/lib/action/feature/todo/create/create.action";
import { useAppSelector } from "@/lib/redux/hook";
import { CreateTodoData } from "@/lib/types/todoCreateType";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  type: Yup.string().required("Type is required"),
});

const dropdownValues: { [key: string]: { id: number; desc: string } } = {
  "1": { id: 1, desc: "Personal" },
  "2": { id: 2, desc: "Work" },
  "3": { id: 3, desc: "Other" },
};

const TodoContainer: React.FC<{ todo?: CreateTodoData }> = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const { data, response } = useAppSelector(
    (state) => state.defaultTodoState.createTodoState
  );

  const formik = useFormik({
    initialValues: {
      title: todo?.title || "",
      description: todo?.desc || "",
      type: todo?.type?.id || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const payload = {
        type: dropdownValues[values.type],
        desc: values.description,
        title: values.title,
      };
      // Handle form submission logic here
      dispatch(createTodoActionCreator(payload));
    },
  });

  useEffect(() => {
    if (response?.code === 201) {
      formik.resetForm();
      console.log("Todo created successfully", data);
    }
  }, [data, response]);

  return (
    <Container maxWidth="lg">
      {/* <Typography variant="h4" gutterBottom>
        Create Todo
      </Typography> */}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth
          margin="normal"
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <FormControl
          fullWidth
          margin="normal"
          error={formik.touched.type && Boolean(formik.errors.type)}
        >
          <InputLabel id="type-label">Type of Todo</InputLabel>
          <Select
            labelId="type-label"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            defaultValue={formik.values.type}
          >
            <MenuItem value="1">Personal</MenuItem>
            <MenuItem value="2">Work</MenuItem>
            <MenuItem value="3">Other</MenuItem>
          </Select>
          {formik.touched.type && formik.errors.type && (
            <Typography color="error" variant="caption">
              {formik.errors.type}
            </Typography>
          )}
        </FormControl>
        <ReactQuill
          value={formik.values.description}
          onChange={(value) => formik.setFieldValue("description", value)}
          onBlur={() => formik.setFieldTouched("description", true)}
          theme="snow"
          placeholder="Detailed Description"
          style={{ marginBottom: "20px" }}
        />
        {formik.touched.description && formik.errors.description && (
          <Typography color="error" variant="caption">
            {formik.errors.description}
          </Typography>
        )}
        <Box display={"flex"}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            style={{ marginRight: "12px" }}
          >
            Create Todo
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            size="medium"
            onClick={() => formik.resetForm()}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default TodoContainer;
