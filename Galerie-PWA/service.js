import { SERVER_URL } from "./config";

function get(id) {
    fetch(`${SERVER_URL}/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}

function post(val) {
    fetch("/login", {
        method: "POST",
        body: val
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}
