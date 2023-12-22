import axios from "axios";

const instance = axios.create({
    baseURL: 'https://todo-eta-tawny-36.vercel.app/api/v1',
  });
const useAxios = () => {
    
      return instance;
};

export default useAxios;