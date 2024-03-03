import axios from "axios";
import { errorAddUser, startAddUser, successAddUser } from "./userSlice";

export const addUser = async (user, dispatch) => {
  dispatch(startAddUser());
  try {
    const req = await axios.post("http://localhost:5000/api/users", user);
    console.log(req);
    dispatch(successAddUser(req.data));
  } catch (err) {
    dispatch(errorAddUser());
  }
};
