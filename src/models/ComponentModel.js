const URL = "http://localhost:3001/api/v1/components";

class ComponentModel {

    static random = (tool, category) => {
        return fetch(`${URL}/${tool}/${category}`).then(response => response.json());
    }
}

export default ComponentModel;