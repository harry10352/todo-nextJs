import { CreateTodoPayload } from "@/lib/types/todoCreateType";
import axios from "axios";

export async function todoCreateService(payload: CreateTodoPayload) {
  const path = `${process.env.path}/notes/create`;
  const sessionId = sessionStorage.getItem("token");
  const response = await axios.post(path, payload, {
    headers: {
      "Content-Type": "application/json",
      sessionId,
    },
  });

  return response.data;
}
