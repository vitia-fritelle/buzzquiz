import id from '../contexts/page2Contexts/Id/Id.js';
import { axiosInstance} from './axiosUtils.js';

const getQuizz = () => {
    
    const myInstance = axiosInstance();
    return myInstance.get(`${id.getId()}`);
}

export const getQuizzWithoutLoading = () => {

    return axiosInstance().get(`${id.getId()}`);
}

export default getQuizz;