import axios from "axios";

export async function todoListService() {
  const path = `${process.env.path}/notes/all`;
  const sessionId = sessionStorage.getItem("token");
  const response = await axios.get(path, {
    headers: {
      "Content-Type": "application/json",
      sessionId,
      userId: "66dec36f6f0d8b2235472e01",
    },
  });

  return response.data;
}
