import axios from "axios";
import humps from "humps";

export default {
  signIn: (user, userSignedIn) => {
    return axios
      .post("http://localhost:3001/api/v1/user_token", {
        auth: {
          ...humps.decamelizeKeys(user)
        }
      })
      .then(result => {
        localStorage.setItem("auth_token", result.data.jwt);
        userSignedIn();
      })
      .catch(error => {
        console.log(error);
      });
  }
};
