import axios from "axios";

export default class AxiosService {
    async getAll(page = 1) {
        return await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
    }
}