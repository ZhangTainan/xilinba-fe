import axios from '@/my-axios'

export function login(username, password) {
    console.log(username);
    return axios.post(
        "/login", {
            username,
            password
        }
    );
}