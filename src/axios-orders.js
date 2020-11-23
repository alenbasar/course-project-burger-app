import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-course-project.firebaseio.com/",
});

export default instance;
