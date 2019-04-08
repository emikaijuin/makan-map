import axios from "axios";

export default {
  signIn: user => {
    return axios
      .post("http://localhost:3001/api/v1/user_token", {
        auth: {
          ...user
        }
      })
      .then(result => {
        localStorage.setItem("auth_token", result.data.jwt);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
