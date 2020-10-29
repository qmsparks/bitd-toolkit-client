const URL = "http://localhost:3001/api/v1/tools";


class ToolModel {

    static generate = tool => {
        return fetch(`${URL}/generate/${tool}`).then(response => response.json());
    }

    static details = tool => {
        return fetch(`${URL}/details/${tool}`).then(response => response.json());
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

    static show = toolId => {
        return fetch(`${URL}/${toolId}`).then(response => response.json());
    }

    static save = (toolData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toolData),
        }).then(response => response.json());
    }

}

export default ToolModel;