const URL = 'http://localhost:3001/api/v1/auth';

class AuthModel {
    static register = data => {
        return fetch(`${URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(response => response.json());
    };

    static login = data => {
        return fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(response => response.json());
    }

    static extendToken() {
        return fetch(`${URL}/token`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.uid}`
            },
        })
        .then(response => response.json())
        .catch(err => console.log('error: ', err));
    }
}

export default AuthModel;