import React, { useState } from "react";
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
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<
    {
      title: string;
      type: string;
      description: string;
    }[]
  >([]);

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
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow key={index}>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.type}</TableCell>
                <TableCell>
                  <div dangerouslySetInnerHTML={{ __html: todo.description }} />
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => console.log("Edit", todo)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => console.log("View", todo)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TodoList;
