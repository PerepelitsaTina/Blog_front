import { connect } from "react-redux";
import { updateUser } from "./main/mainReducer"

export const connectionWithUser = connect(
  (state) => ({
    user: state.main.user
  }), {
  updateUser
}
);


