const URL = "http://localhost:3001/api/v1/components";

class ComponentModel {

    static random = (tool, category) => {
        console.log("query url: ", `${URL}/${tool}/${category}`);
        return fetch(`${URL}/${tool}/${category}`)
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    static show = id => {
        return fetch(`${URL}/${id}`)
        .then(response =>  response.json())
        .catch(err => console.log(err));
    }
}

export default ComponentModel;