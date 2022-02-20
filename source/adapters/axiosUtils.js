import LoadingPage from "../pages/LoadingPage.js";

export const axiosInstance = () => axios.create({
    baseURL: "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
});

export const loadingInterceptor = (instance) => {
    instance.interceptors.request.use((config) => {
        LoadingPage();
        return config;
    });
    return null
}
