import contextgenerator from "./ContextTemplate";
import jsonserver from "../api/jsonServer";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_blogs":
      return action.payload;
    case "add_blog":
      return [...state, action.payload];
    case "remove_blog":
      return state.filter((item) => {
        return item.id != action.payload;
      });
    case "update_blog":
      return state.map((item) => {
        return item.id == action.payload.id ? action.payload : item;
      });
    default:
      return state;
  }
};
const getblogs = (dispatch) => {
  return async () => {
    const response = await jsonserver.get("/blogPost");
    dispatch({ type: "get_blogs", payload: response.data });
  };
};

const addblogs = (dispatch) => {
  return async (blog) => {
    await jsonserver.post("/blogPost", blog);
  };
};
const removeblogs = (dispatch) => {
  return async (id) => {
    await jsonserver.delete(`/blogPost/${id}`);
    dispatch({ type: "remove_blog", payload: id });
  };
};
const updateblog = (dispatch) => {
  return async (id, blog) => {
    await jsonserver.put(`/blogPost/${id}`, blog);
  };
};

export const [BlogContext, BlogProvider] = contextgenerator(
  reducer,
  { getblogs, addblogs, removeblogs, updateblog },
  []
);
