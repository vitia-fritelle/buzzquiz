import { axiosInstance } from "./axiosUtils.js";

const getQuizzes = () => {
    const myInstance = axiosInstance();
    return myInstance.get();
}

export default getQuizzes;