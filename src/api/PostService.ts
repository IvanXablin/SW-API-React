import axios from "axios";

export default class PostService {
    async getAll() {
        try {
            const res = await axios.get('https://swapi.dev/api/planets/');
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
}