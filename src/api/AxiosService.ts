import axios from "axios";
import {IPlanet} from "../types/IPlanet";
import {IPeople} from "../types/IPeople";


export default class AxiosService {
    async getPlanets(page = 1) {
        return await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
    }

    async getPlanet(index: string | undefined) {
        return await axios.get<IPlanet>(`https://swapi.dev/api/planets/${index}`);
    }

    async getPeople(path: []) {
        let peopleArray:IPeople[] = [];

         for (let p of path) {
            let people = await axios.get<IPeople>(p);
            peopleArray.push(people.data);
        }
        return peopleArray;
    }
}