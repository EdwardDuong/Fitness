import { fetchUser } from "../ultis/fetchLocalStorage";

const userInfor = fetchUser();
export const initialState = {
  user: userInfor,
};
