import http from "./axiosHttp";

const getAll = () => {
  return http.get("api/games");
};
const update = (id, data) => {
  return http.put(`/games/${id}`, data);
};
export default {
  getAll,
  update,
};
