import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

export async function fetchBooks(
  query,
  page = 1,
  limit = 12
) {
  const response = await api.get("/books", {
    params: {
      q: query,
      page,
      limit
    }
  });

  return response.data;
}