import axios from "axios";

const API_KEY = "AIzaSyBmunXZi1nkmO5Q_wEp2RefQpFRD_pJl1o";

export const createUser = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
