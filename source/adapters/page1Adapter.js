import { axiosInstance, loadingInterceptor } from "./axiosUtils.js";

const getQuizzes = () => {
    const myInstance = axiosInstance();
    loadingInterceptor(myInstance);
    return myInstance.get();
}

export default getQuizzes;