import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/redux/hook";
import { CreateTodoData } from "@/lib/types/todoCreateType";
import { useDispatch } from "react-redux";
import { listTodoActionCreator } from "@/lib/action/feature/todo/list/list.action";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import CreateNoteDialogue from "@/app/components/createNoteDialogue";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const listData = useAppSelector(
    (state) => state.defaultTodoState?.listTodoState
  );
  const [todos, setTodos] = useState<CreateTodoData[] | undefined>();
  const [editTodo, setEditTodo] = useState<CreateTodoData | undefined>();
  const [editTodoDialogOpen, setEditTodoDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(listTodoActionCreator());
  }, [dispatch]);

  useEffect(() => {
    if (listData?.response?.code === 200 && listData?.data?.length) {
      setTodos(listData?.data);
    }
    console.log(listData);
  }, [listData]);
  console.log("listData", todos);

  function openDialogFn(todo: CreateTodoData) {
    setEditTodo(todo);
    setEditTodoDialogOpen(true);
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom style={{ marginTop: "40px" }}>
        Todo List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.length &&
              todos?.map((todo, i) => (
                <TableRow key={i}>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>{todo.type.desc}</TableCell>
                  <TableCell style={{ padding: "10px" }}>
                    <div dangerouslySetInnerHTML={{ __html: todo?.desc }} />
                  </TableCell>
                  <TableCell width={250}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "5px" }}
                    >
                      <RemoveRedEye />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ marginRight: "5px" }}
                    >
                      <Delete />
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => openDialogFn(todo)}
                    >
                      <Edit />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CreateNoteDialogue
        name="Edit Note"
        open={editTodoDialogOpen}
        todo={editTodo}
        onClose={() => setEditTodoDialogOpen(false)}
      />
    </Container>
  );
};

export default TodoList;
