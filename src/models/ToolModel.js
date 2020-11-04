const URL = "https://bitd-api.herokuapp.com/api/v1/tools";


class ToolModel {

    static generate = tool => {
        return fetch(`${URL}/generate/${tool}`)
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    static details = tool => {
        return fetch(`${URL}/details/${tool}`)
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    static all = () => {
        return fetch(URL, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
            },
        })
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    static filter = type => {
        return fetch(`${URL}/filter/${type}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
            },
        })
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    static show = toolId => {
        return fetch(`${URL}/${toolId}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
            },
        })
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    static save = toolData => {
        return fetch(URL, {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toolData),
        })
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    static update = (toolId, toolData) => {
        return fetch(`${URL}/${toolId}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toolData),
        })
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    static destroy = toolId => {
        return fetch(`${URL}/${toolId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
            },
        })
        .then(response => response.json())
        .catch(err => console.log(err));
    }

}

export default ToolModel;