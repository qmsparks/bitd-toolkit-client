const URL = "http://localhost:3001/api/v1/tools";


class ToolModel {

    static generate = tool => {
        return fetch(`${URL}/generate/${tool}`).then(response => response.json());
    }

    static details = tool => {
        return fetch(`${URL}/details/${tool}`).then(response => response.json());
    }

}

export default ToolModel;