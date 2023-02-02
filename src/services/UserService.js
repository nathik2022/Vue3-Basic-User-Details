import axios from "axios";

export class UserService{
    static users = [];

    static getAllUsers(){
        let dataURL = `https://jsonplaceholder.typicode.com/users`;
        return axios.get(dataURL);
        //return this.users;
    }
    
    static getUser(userId){
        let dataURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
        return axios.get(dataURL);
    }
}